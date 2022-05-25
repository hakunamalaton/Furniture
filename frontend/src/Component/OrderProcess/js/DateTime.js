import React, { useState } from "react";
import DatePicker from "react-datepicker";
import Total from "./Total";
import "react-datepicker/dist/react-datepicker.css";

import { useDispatch, useSelector } from "react-redux";
import { updateShippingMethod, updateShippingDate } from "../slice/cartSlice";

const DateTime = ({ step, AddressData, buyerState, setBuyerState, priceState, setPriceState }) => {
    const dispatch = useDispatch();
    const OrderPriceState = useSelector(state => state.cart.price);

    const size = { "font-size": "1.1rem" };

    // const [shippingOption, setShippingOption] = useState(priceState.shippingOption);
    const [date, setDate] = useState(new Date());
    const [minDate, setMinDate] = useState(new Date());
    const [maxDate, setMaxDate] = useState(new Date());
    const handleChangeShippingOption = (newShippingOption) => {
        const newPriceState = { ...priceState };
        if (newShippingOption === "express") {
            setMinDate((new Date).setDate((new Date).getDate() + 2));
            setMaxDate((new Date).setDate((new Date).getDate() + 6));
            newPriceState.shippingOption = "express";
            newPriceState.shippingScale = 2.5;
            dispatch(updateShippingMethod({ shippingOption: "express", shippingScale: 2.5 }));
        }
        else if (newShippingOption === "standard") {
            setMinDate((new Date).setDate((new Date).getDate() + 7));
            setMaxDate((new Date).setDate((new Date).getDate() + 14));
            newPriceState.shippingOption = "standard";
            newPriceState.shippingScale = 1;
            dispatch(updateShippingMethod({ shippingOption: "standard", shippingScale: 1 }));
        }
        // setPriceState(newPriceState);
        // setShippingOption(newShippingOption);
    };
    const handleChangeDate = (dateTime) => {
        const newPriceState = { ...priceState };
        newPriceState.deliveryDate = dateTime.toJSON();
        // setPriceState(newPriceState);
        dispatch(updateShippingDate(dateTime));

        setDate(dateTime);
    };

    if (step !== 3) {
        return null;
    }

    console.log("priceState", priceState);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-11 mx-auto">
                    <div className="row mt-5 gx-3">
                        <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                            <h3>Additonal Info</h3>
                            <br></br>
                            <div className="additional-info-onchange-form-wrapper">
                                <h5>Shipping Option:</h5>

                                <div className="form-check row list-group-item-action">
                                    <label className="form-check-label d-flex justify-content-md-between row border border-left-0 border-right-0 border-top-0 mr-0">
                                        <input
                                            type="radio"
                                            className="form-check-input mt-4 ml-3"
                                            name="optradio"
                                            id="address"
                                            value={"express"}
                                            onChange={(event) => handleChangeShippingOption(event.target.value)}
                                        />
                                        <div className="mb-3 mt-3 ml-4 col-md">
                                            <p className="mb-0" style={size}>{"Express Shipping"}</p>
                                            <p className="mb-0" style={size}>{"Air Shipping"}</p>
                                            <p className="mb-0" style={size}>{"2 to 6 days shipping after purchase"}</p>
                                            <p className="mb-0" style={size}>{"Nationalwide and Global Shipping"}</p>
                                        </div>
                                        <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                            <p className="font-weight-bold text-success">
                                                {`$${priceState.shipping} x 2.5`}
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                <div className="form-check row list-group-item-action">
                                    <label className="form-check-label d-flex justify-content-md-between row border border-left-0 border-right-0 border-top-0 mr-0">
                                        <input
                                            type="radio"
                                            className="form-check-input mt-4 ml-3"
                                            name="optradio"
                                            id="address"
                                            value={"standard"}
                                            onChange={(event) => handleChangeShippingOption(event.target.value)}
                                        />
                                        <div className="mb-3 mt-3 ml-4 col-md">
                                            <p className="mb-0" style={size}>{"Standard Shipping"}</p>
                                            <p className="mb-0" style={size}>{"Land Shipping"}</p>
                                            <p className="mb-0" style={size}>{"7 to 14 days shipping after purchase"}</p>
                                            <p className="mb-0" style={size}>{"Nationalwide Shipping Only"}</p>
                                        </div>
                                        <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                            <p className="font-weight-bold text-success">
                                                {`$${priceState.shipping} x 1`}
                                            </p>
                                        </div>
                                    </label>
                                </div>

                                <br></br>
                                {(OrderPriceState.shippingOption !== "") &&
                                    <div>
                                        <h5>Date and Time (From {OrderPriceState.shippingOption === "express" ? 2 : 7} days after purchase up to {OrderPriceState.shippingOption === "express" ? 6 : 14} days):</h5>
                                        <DatePicker
                                            selected={date}
                                            onChange={(dateTime) => handleChangeDate(dateTime)}
                                            showTimeSelect
                                            minDate={minDate}
                                            maxDate={maxDate}
                                            dateFormat="Pp"
                                            showDisabledMonthNavigation
                                        />
                                    </div>
                                }
                            </div>
                            <br></br>
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

export default DateTime;
