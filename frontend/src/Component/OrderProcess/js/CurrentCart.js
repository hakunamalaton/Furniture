import React from "react";
import CartItem from "./CartItem";
import Total from "./Total";
import { useSelector } from "react-redux";

const CurrentCart = ({ step, cartState, setCartState, buyerState, setBuyerState, statusState, setStatusState, priceState, setPriceState }) => {
  // console.log("OrderState.cart", cartState);

  const CartSliceState = useSelector(state => state.cart);
  console.log("cartSlice state", CartSliceState);

  if (step !== 1) {
    return null;
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 col-11 mx-auto">
          <div className="row mt-5 gx-3">
            <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5">
              {CartSliceState.cart.map(cartItem => {
                return (
                  <CartItem key={cartItem.id} id={cartItem.id} priceState={priceState} setPriceState={setPriceState} cartState={cartState} setCartState={setCartState} />
                )
              })}
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

export default CurrentCart;