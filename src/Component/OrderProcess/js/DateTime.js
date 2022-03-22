import React, { useState } from "react";
import DatePicker, { addMonths } from "react-datepicker";
import Total from "../../cart/js/Total";
import "react-datepicker/dist/react-datepicker.css";

const DateTime = ({ step, AddressData, buyerState, setBuyerState, priceState, setPriceState }) => {
    const size = { "font-size": "1.1rem" };
    const [date, setDate] = useState(new Date());
    const handleChangeDate = ({ }) => {

    };
    const handleChangeTime = ({ }) => {

    };

    if (step !== 3) {
        return null;
    }

    let todayDate = new Date();
    let minDate = new Date();
    let maxDate = new Date(minDate);
    minDate.setDate(todayDate.getDate() + 5);
    maxDate.setDate(todayDate.getDate() + 30);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-11 mx-auto">
                    <div className="row mt-5 gx-3">
                        <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                            <h3>Additonal Info</h3>
                            <div className="additional-info-onchange-form-wrapper">
                                <label>Date and Time (From 5 days after purchase upto 30 days):</label>
                                <DatePicker
                                    selected={date}
                                    onChange={(date) => setDate(date)}
                                    showTimeSelect
                                    minDate={minDate}
                                    maxDate={maxDate}
                                    dateFormat="Pp"
                                    showDisabledMonthNavigation
                                />
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

export default DateTime;
