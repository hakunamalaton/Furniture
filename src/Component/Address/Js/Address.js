import React from "react";
import { useState } from "react";
import Header from "../../Header/Js/Header";
import datas from "./address.json";

const Address = () => {
    const size = { "font-size": "1.1rem" };

    const [totalPrice, setTotalPrice] = useState("");

    const handleChange = (price) => {
        setTotalPrice(price);
    };
    //     let prices = document.getElementsByTagName("input");
    //     for (var i = 1; i < prices.length; i++) {
    //         if (prices[i].checked) {
    //             // total_price = prices[i].value;
    //             alert(prices[i].value);
    //         }
    //     }
    // };

    return (
        <>
            <Header />
            <div className="container mt-4">
                {/* First row: Title + Add new address button */}
                <div className="row align-items-center d-flex justify-content-between">
                    <div className="col-md d-flex justify-content-center justify-content-md-start">
                        <h3 className="text-primary">Your Address</h3>
                    </div>
                    <div className="col-md-3 d-flex justify-content-md-end justify-content-center">
                        <button type="button" className="btn btn-primary btn-block">
                            Add new address
                        </button>
                    </div>
                </div>

                {/* Addresses List */}
                <div className="mt-3">
                    {datas.map((data) => {
                        return (
                            <div className="form-check row list-group-item-action">
                                <label className="form-check-label d-flex justify-content-md-between row border border-left-0 border-right-0 border-top-0">
                                    <input
                                        type="radio"
                                        className="form-check-input mt-4"
                                        name="optradio"
                                        id="address"
                                        value={data.price}
                                        onChange={() => handleChange(data.price)}
                                    />
                                    <div className="mb-3 mt-3 col-md">
                                        <p className="mb-0" style={size}>
                                            {data.fullName}
                                        </p>
                                        <p className="mb-0" style={size}>
                                            {data.phoneNum}
                                        </p>
                                        <p className="mb-0" style={size}>
                                            {data.description}
                                        </p>
                                        <p
                                            className="mb-0"
                                            style={size}
                                        >{`${data.town}, ${data.district}, ${data.city}`}</p>
                                    </div>
                                    <div className="col-md-3 mr-3 d-flex justify-content-end">
                                        <p className="font-weight-bold text-success">
                                            {data.price}
                                        </p>
                                    </div>
                                </label>
                            </div>
                        );
                    })}
                    <div className="d-flex justify-content-end align-items-center mb-3">
                        <p
                            style={size}
                            className="total_price mb-0 mr-3 font-weight-bold text-success"
                        >
                            {`Total ship cost: ${totalPrice}`}
                        </p>
                    </div>
                    <div className="d-flex justify-content-end align-items-center mb-5">
                        <button type="button" className="col-2 btn btn-primary">
                            OK
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Address;
