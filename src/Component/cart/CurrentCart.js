import React, { useState } from "react";
import Header from "../Header/Js/Header";
import Goods from "./Goods";
import Total from "./Total";
const CurrentCart = () => {
  const [totalPrice, setTotalPrice] = useState(600)
  function setPrice (totalPrice){
      setTotalPrice(totalPrice)
  }
  return (
    <div class="bg-light">
      <Header />
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-10 col-11 mx-auto">
            <div class="row mt-5 gx-3">
              <div class="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                <Goods Price = {setPrice} total = {totalPrice}/>
                <hr />
                <Goods Price = {setPrice} total = {totalPrice}/>
               
              </div>

              <div class="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <Total price = {totalPrice}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentCart;
