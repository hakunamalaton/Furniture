import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import momoBtn from "../../../picture/momoBtn.png";
import paypalBtn from "../../../picture/paypalBtn.jpg";

import { updateFinalPrice, createOrder } from "../../OrderProcess/slice/cartSlice";

const Total = ({ priceState, paymentOption }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const OrderState = useSelector(state => state.cart);

  const OrderPriceState = useSelector(state => state.cart.price);

  const handlePayWithPayPal = () => {
    dispatch(updateFinalPrice());
    console.log("Pay with PayPal");
    dispatch(createOrder(OrderState));
    history.push("/transaction-history");
  };
  const handlePayWithMomo = () => {
    dispatch(updateFinalPrice());
    console.log("The Final Price To Pay", OrderPriceState.final_price);
    console.log("Pay with Momo");
  };


  console.log("Total.js priceState", priceState);
  const taxFee = (OrderPriceState.total * OrderPriceState.tax_percent / 100);
  return (
    <div className="right_side p-3 shadow bg-info">
      <div>{OrderState.price.final_price}</div>
      <div>
        <h2 className="product_name mb-5">The Total Amount Of</h2>
        <div className="price_indiv d-flex justify-content-between">
          <p>Total Item Price</p>
          <p>$<span id="product_total_amt">{OrderPriceState.total.toFixed(2)}</span></p>
        </div>
        <div className="price_indiv d-flex justify-content-between">
          <p>Shipping Fee</p>
          <p><span id="shipping_charge">{(OrderPriceState.shipping === "") ? "Not yet calculated" : `$${OrderPriceState.shipping.toFixed(2)} x ${OrderPriceState.shippingScale.toFixed(2)}`}</span></p>
        </div>

        <div className="total-amt d-flex justify-content-between">
          <p>Tax ({OrderPriceState.tax_percent}% Total):</p>
          <p>
            $<span id="total_cart_amt">{taxFee.toFixed(2)}</span>
          </p>
        </div>
        <hr />
        <div className="total-amt d-flex justify-content-between font-weight-bold">
          <p>TOTAL PRICE:</p>
          <p>
            $<span id="total_cart_amt">{(OrderPriceState.total + taxFee + ((OrderPriceState.shipping === "") ? 0 : OrderPriceState.shipping * OrderPriceState.shippingScale)).toFixed(2)}</span>
          </p>
        </div>
        <div className="row justify-content-md-center pt-5">
          <div className="font-weight-bold">
            <h4></h4>
          </div>
        </div>
        <div className="row justify-content-md-center pt-5">
          {(paymentOption === "paypal") &&
            <div className="pay-button">
              {/* <PayPalScriptProvider options={{ "client-id": "AUZcPEaGuyWYI45CPzAGPSMxJejKLPV7bx0rNz6EfIjhg1M07bdiCdUF7CepEa_Cs-MhRgnw8NqMxt28" }}>
                <PayPalButtons
                  createOrder={async (data, action) => { console.log("first click") }}
                  onApprove={async (data, actions) => { console.log("second click") }}
                />
              </PayPalScriptProvider> */}
              <div onClick={() => { handlePayWithPayPal() }} className="paypal-btn-div">
                <img src={paypalBtn} alt="Paypal button image" width={200} height={60} />
              </div>
            </div>
          }
          {(paymentOption === "momo") &&
            <div className="pay-button">
              <div onClick={() => { handlePayWithMomo() }} className="momo-btn-div">
                <img src={momoBtn} alt="Momo button image" width={300} height={50} />
              </div>
            </div>
          }
          {(paymentOption === "credit") &&
            <div className="pay-button">
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Total;
