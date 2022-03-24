import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const Total = ({ priceState, paymentOption }) => {
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
          <p><span id="shipping_charge">{(priceState.shipping === "") ? "Not yet calculated" : `$${priceState.shipping.toFixed(2)} x ${priceState.shippingScale.toFixed(2)}`}</span></p>
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
            $<span id="total_cart_amt">{(priceState.total + taxFee + ((priceState.shipping === "") ? 0 : priceState.shipping * priceState.shippingScale)).toFixed(2)}</span>
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
              <PayPalScriptProvider options={{ "client-id": "AUZcPEaGuyWYI45CPzAGPSMxJejKLPV7bx0rNz6EfIjhg1M07bdiCdUF7CepEa_Cs-MhRgnw8NqMxt28" }}>
                <PayPalButtons
                  createOrder={async (data, action) => { }}
                  onApprove={async (data, actions) => { }}
                />
              </PayPalScriptProvider>
            </div>
          }
          {(paymentOption === "momo") &&
            <div className="pay-button">
              Momo Button Here
            </div>
          }
          {(paymentOption === "credit") &&
            <div className="pay-button">
              Credit Card not yet supported
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default Total;
