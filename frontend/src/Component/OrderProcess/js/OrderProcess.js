import React, { useState } from "react";
import Header from "../../Header/Js/Header";
import Footer from "../../Footer/Js/Footer";
import "../css/OrderProcess.css";

import OrderData from "./fakeOrderData.json";
import AddressData from "./fakeAddressData.json";

import MultiStepProgressBar from "./MultiStepProgressBar";
import AddressOnly from "./AddressOnly";
import DateTime from "./DateTime";
import Payment from "./Payment";
import CurrentCart from "./CurrentCart";

import { useSelector, useDispatch } from "react-redux";
import { incrementItemQuantity, decrementItemQuantity } from "../slice/cartSlice";

const OrderProcess = () => {

    const { buyer, cart, status, price } = OrderData;
    const [cartState, setCartState] = useState(cart);
    const [buyerState, setBuyerState] = useState(buyer);
    const [statusState, setStatusState] = useState(status);
    const [priceState, setPriceState] = useState(price);
    const [step, setStep] = useState(1);

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
                <div className="next-prev-button-bar">
                    <button onClick={toPrevPage} type="button" className="btn btn-primary">Prev</button>
                    <button onClick={toNextPage} type="button" className="btn btn-primary">Next</button>
                </div>
                <CurrentCart step={step} cartState={cartState} setCartState={setCartState} buyerState={buyerState} setBuyerState={setBuyerState} statusState={statusState} setStatusState={setStatusState} priceState={priceState} setPriceState={setPriceState} />
                <AddressOnly step={step} AddressData={AddressData} buyerState={buyerState} setBuyerState={setBuyerState} priceState={priceState} setPriceState={setPriceState} />
                <DateTime step={step} cartState={cartState} setCartState={setCartState} buyerState={buyerState} setBuyerState={setBuyerState} statusState={statusState} setStatusState={setStatusState} priceState={priceState} setPriceState={setPriceState} />
                <Payment step={step} cartState={cartState} setCartState={setCartState} buyerState={buyerState} setBuyerState={setBuyerState} statusState={statusState} setStatusState={setStatusState} priceState={priceState} setPriceState={setPriceState} />
            </div>
            <Footer />
        </div>
    );
};

export default OrderProcess;
