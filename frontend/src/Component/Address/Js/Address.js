import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAddress } from "../../OrderProcess/slice/cartSlice";
import { getUserAddresses } from "../../Account/slice/accountSlice";

import NewAddressModal from "./NewAddressModal";
import Total from "../../OrderProcess/js/Total";

const Address = ({ step, buyerState, setBuyerState, priceState, setPriceState }) => {
    const dispatch = useDispatch();
    const size = { fontSize: "1.1rem" };


    const AccountState = useSelector(state => state.account);
    const OrderPriceState = useSelector(state => state.cart.price);
    const OrderBuyerState = useSelector(state => state.cart.buyer);
    const [totalPrice, setTotalPrice] = useState("");


    useEffect(() => {
        dispatch(getUserAddresses(AccountState.token));
    }, []);


    if (step !== 2) {
        return null;
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-11 mx-auto">
                    <div className="row mt-5 gx-3">
                        <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                            <div className="container pt-4 address">
                                {/* First row: Title + Add new address button */}
                                <div className="row align-items-center d-flex justify-content-between">
                                    <div className="col-md d-flex justify-content-center justify-content-md-start">
                                        <h3 style={{ color: "#054c73" }}>Your Address</h3>
                                    </div>
                                    <div className="col-md-3 d-flex justify-content-md-end justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-block text-light"
                                            data-toggle="modal"
                                            data-target="#myModal"
                                            style={{ backgroundColor: "#054c73" }}
                                        >
                                            Add new address
                                        </button>
                                        <NewAddressModal />
                                    </div>
                                </div>

                                {/* Addresses List */}
                                <div className="mt-3">
                                    {AccountState.addressList.map((addressItem, index) => {
                                        return (
                                            <div key={index} className="form-check row list-group-item-action">
                                                <label className="form-check-label d-flex justify-content-md-between row border border-left-0 border-right-0 border-top-0 mr-0">
                                                    <input
                                                        type="radio"
                                                        className="form-check-input mt-4 ml-3"
                                                        name="optradio"
                                                        id="address"
                                                        value={addressItem.price}
                                                        onChange={() => dispatch(updateAddress(addressItem))}
                                                    />
                                                    <div className="mb-3 mt-3 ml-4 col-md">
                                                        <p className="mb-0" style={size}>
                                                            (+84) {addressItem.phone_number}
                                                        </p>
                                                        <p className="mb-0" style={size}>
                                                            Description: {addressItem.description}
                                                        </p>
                                                        <p className="mb-0" style={size}>
                                                            Location: {addressItem.location}
                                                        </p>
                                                    </div>
                                                    <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                                        <p className="font-weight-bold text-success">
                                                            {addressItem.price}$
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                        );
                                    })}
                                    <div className="d-flex justify-content-end align-items-center mb-3">
                                        <p
                                            style={size}
                                            className="total_price mt-3 mb-0 mr-3 font-weight-bold text-success"
                                        >
                                            {`Total ship cost: ${OrderPriceState.shipping}`}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end align-items-center mb-5">
                                        <button
                                            type="button"
                                            className="col-2 btn text-light"
                                            style={{ backgroundColor: "#054c73" }}
                                        >
                                            OK
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                            <Total priceState={priceState} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Address;
