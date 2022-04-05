import React, { useEffect, useState } from "react";

import Mapbox from "./Mapbox";

function NewAddressModal() {
    const [childProp, setChildProp] = useState();
    const [address, setAddress] = useState();
    const [street, setStreet] = useState("");

    const ParentcallbackFunction = (choosenAddressData) => {
        setChildProp(choosenAddressData);
    };

    useEffect(() => {
        if (childProp) {
            var splitChoosenAdd = childProp.choosenAdd.split(",");
            var [, ...rest] = splitChoosenAdd;
            if (street.length === 0) setAddress(`${childProp.choosenAdd}`);
            else if (street.length !== 0) {
                if (!isNaN(splitChoosenAdd[0])) setAddress(`${street}, ${rest}`);
                else setAddress(`${street}, ${childProp.choosenAdd}`);
            }
        }
    }, [street, childProp]);

    return (
        <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title">Modal Heading</h4>
                        <button type="button" className="close" data-dismiss="modal">
                            &times;
                        </button>
                    </div>

                    <div className="modal-body">
                        <label>Họ và tên: </label>
                        <input type="text" id="fullname" /> <br />
                        <label>Số điện thoại: </label>
                        <input type="text" id="phone" /> <br />
                        <label>Số nhà, đường: </label>
                        <input
                            type="text"
                            id="street"
                            onChange={(e) => {
                                setStreet(e.target.value);
                            }}
                        />
                        <Mapbox ParentcallbackFunction={ParentcallbackFunction} address={address} />
                    </div>

                    <div className="modal-footer justify-content-between position-fixed-bottom">
                        <div className="col-8">
                            <div className="overflow-hidden address">
                                {address ? address : childProp ? childProp.choosenAdd : ""}
                            </div>
                            <div>
                                {childProp ? `Distance: ${childProp.distance.toFixed(2)} km` : ""}
                            </div>
                        </div>

                        <button
                            type="button"
                            className="col-3 btn btn-success text-light"
                            data-dismiss="modal"
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
