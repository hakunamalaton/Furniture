import React, { useState } from "react";
import Total from "./Total";
import { useDispatch, useSelector } from "react-redux";
import { updatePaymentMethod } from "../slice/cartSlice";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { updateIsCouponAdded } from '../slice/cartSlice';

const Payment = ({ step, AddressData, buyerState, setBuyerState, priceState, setPriceState }) => {
    const size = { "font-size": "1.1rem" };

    const [couponInput, setCouponInput] = useState("");
    const OrderPaymentState = useSelector(state => state.cart.payment);
    const isCouponAdded = useSelector(state => state.cart.isCouponAdded);
    const chosenCoupon = useSelector(state => state.cart.chosenCoupon);

    const dispatch = useDispatch();

    if (step !== 4) {
        return null;
    }

    const handleChangeCouponInput = ({ target: { value } }) => {
        setCouponInput(value);
    }

    const handleSubmitCoupon = (event) => {
        console.log(`handleSubmitCoupon chosenCoupon: ${chosenCoupon} and couponInput: ${couponInput}`);
        event.preventDefault();
        if (chosenCoupon !== null && chosenCoupon.name === couponInput) {
            dispatch(updateIsCouponAdded(true));
            alert("Add coupon success!");
        } else {
            alert("Invalid coupon! Please try again :(");
        }
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-10 col-11 mx-auto">
                    <div className="row mt-5 gx-3">
                        <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                            <h3>Proceed Payment</h3>
                            {!isCouponAdded &&
                                (<Form onSubmit={handleSubmitCoupon}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Input Your Voucher to gain discounts !!!</Form.Label>
                                        <Form.Control onChange={handleChangeCouponInput} value={couponInput} type="text" placeholder="Discount Voucher" />
                                        <Form.Text className="text-muted">Only one voucher is applied for each order</Form.Text>
                                        <Button variant="primary" type="submit">
                                            Submit
                                        </Button>
                                    </Form.Group>
                                </Form>)
                            }
                            <br></br>
                            <div className="additional-info-onchange-form-wrapper">
                                <h5>Payment Option:</h5>

                                <div className="form-check row list-group-item-action">
                                    <label className="form-check-label d-flex justify-content-md-between row border border-left-0 border-right-0 border-top-0 mr-0">
                                        <input
                                            type="radio"
                                            className="form-check-input mt-4 ml-3"
                                            name="optradio"
                                            id="address"
                                            value={"paypal"}
                                            onChange={(event) => dispatch(updatePaymentMethod(event.target.value))}
                                        />
                                        <div className="mb-3 mt-3 ml-4 col-md">
                                            <p className="mb-0" style={size}>{"PayPal"}</p>
                                            <p className="mb-0" style={size}>{"Pay with PayPal Balance"}</p>
                                            <p className="mb-0" style={size}>{"International Transaction Support"}</p>
                                            <p className="mb-0" style={size}>{"Accept for Global Shipment"}</p>
                                        </div>
                                        <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                            <img width={150} height={40} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/PayPal_logo.svg/1280px-PayPal_logo.svg.png" alt="paypal-logo" />
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
                                            value={"momo"}
                                            onChange={(event) => dispatch(updatePaymentMethod(event.target.value))}
                                        />
                                        <div className="mb-3 mt-3 ml-4 col-md">
                                            <p className="mb-0" style={size}>{"MoMo"}</p>
                                            <p className="mb-0" style={size}>{"Pay with MoMo E-Wallet"}</p>
                                            <p className="mb-0" style={size}>{"Vietnam Dong Support Only"}</p>
                                            <p className="mb-0" style={size}>{"Accept for Nationwide Shipment"}</p>
                                        </div>
                                        <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                            <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                                <img width={80} height={80} src="https://upload.wikimedia.org/wikipedia/vi/f/fe/MoMo_Logo.png" alt="momo-logo" />
                                            </div>
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
                                            value={"credit"}
                                            onChange={(event) => { }}
                                        />
                                        <div className="mb-3 mt-3 ml-4 col-md">
                                            <p className="mb-0" style={size}>{"Credit Card or Debit Card"}</p>
                                            <p className="mb-0" style={size}>{"Not support yet"}</p>
                                        </div>
                                        <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                            <div className="col-md-3 mt-3 mr-3 d-flex justify-content-end">
                                                <img width={300} height={60} src="https://camo.githubusercontent.com/b45d680d48b4b642b19ac7308567ea61f995a566d8b2a9165def53740574f3b5/687474703a2f2f73746f726167652e6a302e686e2f6372656469742d636172642d6c6f676f732d322e706e67" alt="credit-card-logo" />
                                            </div>
                                        </div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                            <Total priceState={priceState} paymentOption={OrderPaymentState.paymentOption} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
