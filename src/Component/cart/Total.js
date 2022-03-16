import React from "react";
import Header from "../Header/Js/Header";
import { PayPalButton } from "react-paypal-button-v2";
import Goods from "./Goods";
const Total = (props) => {
  let shippingFee = 15;
  let tax = 5;
  return (
    
    <div class="right_side p-3 shadow bg-info">
      <div>
        <h2 class="product_name mb-5">The Total Amount Of</h2>
        <div class="price_indiv d-flex justify-content-between">
          <p>Total Item Price</p>
          <p>
            $<span id="product_total_amt">{props.price}</span>
          </p>
        </div>
        <div class="price_indiv d-flex justify-content-between">
          <p>Shipping Fee</p>
          <p>
            $<span id="shipping_charge">{shippingFee}</span>
          </p>
        </div>

        <div class="total-amt d-flex justify-content-between">
          <p>Tax (10% Total):</p>
          <p>
            $<span id="total_cart_amt">{tax}</span>
          </p>
        </div>
        <hr />
        <div class="total-amt d-flex justify-content-between font-weight-bold">
          <p>TOTAL PRICE:</p>
          <p>
            $<span id="total_cart_amt">{props.price+tax+shippingFee}</span>
          </p>
        </div>
        <div class="row justify-content-md-center pt-5">
          <div class="font-weight-bold">
        <h4>PLEASE CHOOSE PAYMENT METHOD</h4>
        </div>
        </div>
        <div class="row justify-content-md-center pt-5">
       
        <button class="page-link ">
          <PayPalButton style={{ layout: "horizontal"}} />
        </button>
       
       
      </div>
      </div>
    </div>
  );
};

export default Total;
