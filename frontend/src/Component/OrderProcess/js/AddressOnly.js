import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAddress } from "../slice/cartSlice";

import NewAddressModal from "../../Address/Js/NewAddressModal";
import Total from "./Total";

const AddressOnly = ({ step, AddressData, buyerState, setBuyerState, priceState, setPriceState }) => {
    const dispatch = useDispatch();
    const size = { "font-size": "1.1rem" };

    const AddressListState = useSelector(state => state.account.addressList);
    const OrderPriceState = useSelector(state => state.cart.price);
    const OrderBuyerState = useSelector(state => state.cart.buyer);

    const handleChangeAddress = ({ price, fullName, phoneNum, description, town, district, city }) => {
        let newPriceState = { ...priceState };
        newPriceState.shipping = price;
        setPriceState(newPriceState);
        let newBuyerState = { ...buyerState };
        newBuyerState = {
            ...newBuyerState,
            fullName, phoneNum,
            address: { city, district, town, description }
        };
        setBuyerState(newBuyerState);
    };

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
                                            style={{ "background-color": "#054c73" }}
                                        >
                                            Add new address
                                        </button>
                                        <NewAddressModal />
                                    </div>
                                </div>

                                {/* Addresses List */}
                                <div className="mt-3">
                                    {AddressListState.map((addressItem) => {
                                        return (
                                            <div className="form-check row list-group-item-action">
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
                                                            {addressItem.fullName}
                                                        </p>
                                                        <p className="mb-0" style={size}>
                                                            {addressItem.phoneNum}
                                                        </p>
                                                        <p className="mb-0" style={size}>
                                                            {addressItem.description}
                                                        </p>
                                                        <p
                                                            className="mb-0"
                                                            style={size}
                                                        >{`${addressItem.town}, ${addressItem.district}, ${addressItem.city}`}</p>
                                                    </div>
                                                    <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                                        <p className="font-weight-bold text-success">
                                                            {addressItem.price}
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
                                            {`Total ship cost: ${(priceState.shipping === "" ? "Not yet calculated" : priceState.shipping)}`}
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-end align-items-center mb-5">
                                        <button
                                            type="button"
                                            className="col-2 btn text-light"
                                            style={{ "background-color": "#054c73" }}
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

export default AddressOnly;
