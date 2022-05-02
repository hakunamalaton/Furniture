import React, { useEffect, useState } from "react";
import axios from "axios";
import Mapbox from "./Mapbox";
import { useSelector, useDispatch } from "react-redux";

import { addNewUserAddress } from "../../Account/slice/accountSlice";

function NewAddressModal() {

    const dispatch = useDispatch();
    const AccountState = useSelector(state => state.account);

    const [childProp, setChildProp] = useState();
    const [address, setAddress] = useState();

    const [street, setStreet] = useState("");
    const [description, setDescription] = useState("");
    const [phoneNumber, setPhoneNumber] = useState();

    const [price, setPrice] = useState(0);

    const ParentcallbackFunction = (choosenAddressData) => {
        setChildProp(choosenAddressData);
    };

    useEffect(() => {
        if (childProp) {
            var splitChoosenAdd = childProp.choosenAdd.split(",");
            var [, ...rest] = splitChoosenAdd;
            if (street.length === 0) setAddress(`${childProp.choosenAdd}`);
            else if (street.length !== 0 && !isNaN(splitChoosenAdd[0]))
                setAddress(`${street}, ${rest}`);
        }
    }, [street, childProp]);

    useEffect(() => {
        if (childProp) {
            var distance = childProp.distance;
            if (distance > 40) {
                setPrice(9.99);
            }
            if (distance > 100) {
                setPrice(14.99);
            }
            if (distance > 150) {
                setPrice(20.99);
            }
            if (distance > 200) {
                setPrice(24.99);
            }
            if (distance > 300) {
                setPrice(29.99);
            }
        }
    }, [childProp]);

    let id = 1;

    function handleAddNewAddress() {
        let submitAddress = "";

        if (address) submitAddress = address;
        else if (childProp) submitAddress = childProp.choosenAdd;

        if ((address || childProp) && phoneNumber) {
            console.log("In NewAddressModal data", {
                location: submitAddress,
                description: description,
                price: price,
                phone_number: phoneNumber,
                userId: AccountState.token,
            });
            dispatch(addNewUserAddress({
                location: submitAddress,
                description: description,
                price: price,
                phone_number: phoneNumber,
                userId: AccountState.token,
            }))
        }
        // axios.post(`http://localhost:8000/users/${id}/address`, {
        //     location: submitAddress,
        //     description: description,
        //     price: price,
        //     phone_number: phoneNumber,
        // });
    }

    return (
        <div className="modal fade " id="myModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content container">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        <div className="row justify-content-center">
                            *
                            <input
                                className="col-11"
                                type="text"
                                id="phone"
                                placeholder="Phone Number:"
                                onChange={(e) => {
                                    setPhoneNumber(e.target.value);
                                }}
                            />
                        </div>{" "}
                        <br></br>
                        <div className="row justify-content-center">
                            <input
                                className="col-11"
                                type="text"
                                id="street"
                                placeholder="No. Street:"
                                onChange={(e) => {
                                    setStreet(e.target.value);
                                }}
                            />
                        </div>{" "}
                        <br></br>
                        <div className="row justify-content-center">
                            <input
                                className="col-11"
                                type="text"
                                id="description"
                                placeholder="Description:"
                                onChange={(e) => {
                                    setDescription(e.target.value);
                                }}
                            />
                        </div>{" "}
                        <br></br>
                        <Mapbox ParentcallbackFunction={ParentcallbackFunction} address={address} />
                    </div>

                    <div className="modal-footer justify-content-between position-fixed-bottom">
                        <div className="col-lg-8 col-12">
                            <div className="overflow-hidden address">
                                {address ? address : childProp ? childProp.choosenAdd : ""}
                            </div>
                            <div>{childProp ? `Price: ${price}$` : ""}</div>
                        </div>

                        <button
                            type="button"
                            className="col-lg-3 col-12 btn btn-success text-light"
                            data-dismiss="modal"
                            onClick={handleAddNewAddress}
                        >
                            Add new address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewAddressModal;
