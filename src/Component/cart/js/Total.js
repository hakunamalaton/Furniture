import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const Total = ({ priceState }) => {
  console.log("Total.js priceState", priceState);
  const taxFee = (priceState.total * priceState.tax_percent / 100);
  return (
    <div className="right_side p-3 shadow bg-info">
      <div>
        <h2 className="product_name mb-5">The Total Amount Of</h2>
        <div className="price_indiv d-flex justify-content-between">
          <p>Total Item Price</p>
          <p>$<span id="product_total_amt">{priceState.total.toFixed(2)}</span></p>
        </div>
        <div className="price_indiv d-flex justify-content-between">
          <p>Shipping Fee</p>
          <p><span id="shipping_charge">{(priceState.shipping === "") ? "Not yet calculated" : `$${priceState.shipping.toFixed(2)}`}</span></p>
        </div>

        <div className="total-amt d-flex justify-content-between">
          <p>Tax ({priceState.tax_percent}% Total):</p>
          <p>
            $<span id="total_cart_amt">{taxFee.toFixed(2)}</span>
          </p>
        </div>
        <hr />
        <div className="total-amt d-flex justify-content-between font-weight-bold">
          <p>TOTAL PRICE:</p>
          <p>
            $<span id="total_cart_amt">{(priceState.total + taxFee + ((priceState.shipping === "") ? 0 : priceState.shipping)).toFixed(2)}</span>
          </p>
        </div>
        <div className="row justify-content-md-center pt-5">
          <div className="font-weight-bold">
            <h4></h4>
          </div>
        </div>
        <div className="row justify-content-md-center pt-5">
          {/* 
          <button className="page-link ">
            <PayPalButton style={{ layout: "horizontal" }} />
          </button> */}


        </div>
      </div>
    </div>
  );
};

export default Total;
