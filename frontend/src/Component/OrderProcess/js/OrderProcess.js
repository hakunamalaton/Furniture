import React, { useState } from "react";
import { useSelector } from "react-redux";

import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import "../css/OrderProcess.css";

import OrderData from "./fakeOrderData.json";

import MultiStepProgressBar from "./MultiStepProgressBar";
import Address from "../../Address/Js/Address";
import DateTime from "./DateTime";
import Payment from "./Payment";
import CurrentCart from "./CurrentCart";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


const OrderProcess = () => {
    const chosenCoupon = useSelector(state => state.cart.chosenCoupon);
    const isCouponAdded = useSelector(state => state.cart.isCouponAdded);

    const { buyer, cart, status, price } = OrderData;
    const [cartState, setCartState] = useState(cart);
    const [buyerState, setBuyerState] = useState(buyer);
    const [statusState, setStatusState] = useState(status);
    const [priceState, setPriceState] = useState(price);
    const [step, setStep] = useState(1);
    const [showCouponMessage, setShowCouponMessage] = useState(!isCouponAdded);

    const toPrevPage = () => {
        if (step <= 1) return;
        setStep(step - 1);
    }

    const toNextPage = () => {
        if (step >= 4) return;
        setStep(step + 1);
    }


    console.log(buyerState);

    return (
        <div className="bg-light">
            <Header />
            {
                showCouponMessage && chosenCoupon && (<Modal show={showCouponMessage} onHide={() => setShowCouponMessage(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Coupon Discount !!!</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>{`Congratulation, you earns coupon '${chosenCoupon.name}' valued ${chosenCoupon.value}$`}</p>
                        <p>{`Type your coupon into form at 'Proceed Payment' step to gain discounts.`}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowCouponMessage(false)}>Close</Button>
                    </Modal.Footer>
                </Modal>)
            }
            <div className="order-page-wrapper">
                <div className="progress-bar">
                    <MultiStepProgressBar currentStep={step} />
                </div>
                <div className="progress-bar-content">
                    <div className="progress-bar-item"> Review Cart </div>
                    <div className="progress-bar-item"> Delivery Address </div>
                    <div className="progress-bar-item"> Shipping Time </div>
                    <div className="progress-bar-item"> Proceed Payment </div>
                </div>
                <div className={`next-prev-button-bar ${step === 1 ? "justify-content-end" : step === 4 ? "justify-content-star" : "justify-content-between"}`}>
                    <button onClick={toPrevPage} type="button" className={`btn btn-primary ${step === 1 ? "d-none" : "d-block"}`}>Prev</button>
                    <button onClick={toNextPage} type="button" className={`btn btn-primary ${step === 4 ? "d-none" : "d-block"}`}>Next</button>
                </div>
                <CurrentCart step={step} cartState={cartState} setCartState={setCartState} buyerState={buyerState} setBuyerState={setBuyerState} statusState={statusState} setStatusState={setStatusState} priceState={priceState} setPriceState={setPriceState} />
                <Address step={step} buyerState={buyerState} setBuyerState={setBuyerState} priceState={priceState} setPriceState={setPriceState} />
                <DateTime step={step} cartState={cartState} setCartState={setCartState} buyerState={buyerState} setBuyerState={setBuyerState} statusState={statusState} setStatusState={setStatusState} priceState={priceState} setPriceState={setPriceState} />
                <Payment step={step} cartState={cartState} setCartState={setCartState} buyerState={buyerState} setBuyerState={setBuyerState} statusState={statusState} setStatusState={setStatusState} priceState={priceState} setPriceState={setPriceState} />
            </div>
            <Footer />
        </div>
    );
};

export default OrderProcess;
