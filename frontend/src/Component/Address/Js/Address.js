import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../Header/Js/Header";
import datas from "./address.json";
import NewAddressModal from "./NewAddressModal";
import Footer from "../../Footer/Js/Footer";

const Address = () => {
    const size = { fontSize: "1.1rem" };

    const [totalPrice, setTotalPrice] = useState("");

    const handleChange = (price) => {
        setTotalPrice(price);
    };

    let id = 1;

    const [dataAddresses, setDataAddresses] = useState([]);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/users/${id}/address`)
            .then((res) => setDataAddresses(res.data.address))
            .catch((err) => console.log("[ERROR!]: " + err));
    }, [dataAddresses]);

    return (
        <>
            <Header />
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
                    {dataAddresses.map((data, index) => {
                        return (
                            <div key={index} className="form-check row list-group-item-action">
                                <label className="form-check-label d-flex justify-content-md-between row border border-left-0 border-right-0 border-top-0 mr-0">
                                    <input
                                        type="radio"
                                        className="form-check-input mt-4 ml-3"
                                        name="optradio"
                                        id="address"
                                        value={data.price}
                                        onChange={() => handleChange(data.price)}
                                    />
                                    <div className="mb-3 mt-3 ml-4 col-md">
                                        <p className="mb-0" style={size}>
                                            (+84) {data.phone_number}
                                        </p>
                                        <p className="mb-0" style={size}>
                                            Description: {data.description}
                                        </p>
                                        <p className="mb-0" style={size}>
                                            {data.location}
                                        </p>
                                    </div>
                                    <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                        <p className="font-weight-bold text-success">
                                            {data.price}$
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
                            {`Total ship cost: ${totalPrice}`}
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
            <Footer />
        </>
    );
};

export default Address;
