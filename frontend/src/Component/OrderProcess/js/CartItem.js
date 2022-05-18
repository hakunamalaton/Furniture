import React from "react";
import { FaMinusCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

import { incrementItemQuantity, decrementItemQuantity, removeItem } from "../slice/cartSlice";
import { useSelector, useDispatch } from "react-redux";

const CartItem = (props) => {
    const dispatch = useDispatch();

    /**
     * How to write custom selector for case select item by its info, but still keep
     * the ability to auto render when change
     */
    const cartItemList = useSelector(state => state.cart.cart);

    const { id} = props;
    let itemInfo = null;
    cartItemList.forEach(cartItem => {
        if (cartItem.id === id) {
            /**
             * Pass by pointer (pointer is value but its member is reference)
             */
            itemInfo = cartItem; return;
        }
    });


    // if (itemInfo === null) { alert("ERROR: item not found in cart by id") }
    // const IncrementItemQuantity = () => {
    //     const newCartState = [...cartState];
    //     cartState.forEach(cartItem => {
    //         if (cartItem.id === id) {
    //             cartItem.quantity += 1;
    //             console.log("Increment Item Click", newCartState);
    //             setPriceState({ ...priceState, total: priceState.total + cartItem.price }); return;
    //         }
    //     });
    //     setCartState(newCartState);
    // }
    // const DecrementItemQuantity = () => {
    //     const newCartState = [...cartState];
    //     cartState.forEach(cartItem => {
    //         if (cartItem.id === id) {
    //             if (cartItem.quantity > 1) {
    //                 cartItem.quantity -= 1;
    //                 setPriceState({ ...priceState, total: priceState.total - cartItem.price }); return;
    //             } else {
    //                 return;
    //             }
    //         }
    //     });
    //     setCartState(newCartState);
    // }
    // const RemoveItem = () => {
    //     console.log("id", id);
    //     let newCartState = cartState.filter(cartItem => {
    //         if (id === cartItem.id) {
    //             setPriceState({ ...priceState, total: priceState.total - cartItem.price * cartItem.quantity }); return false;
    //         }
    //         return true;
    //     })
    //     console.log(newCartState);
    //     setCartState(newCartState);
    // }
    return (
        <div className="card p-4 border border-primary my-1">
            <div className="row">
                <div className="col-md-5 col-9 d-flex justify-content-center align-items-start product_img">
                    <div style={{backgroundColor: "#C9ECFF"}}>
                    <img src={itemInfo.image} className="d-block w-100" alt="cart img" />
                    </div>
                </div>

                <div className="col-md-7 col-11 pl-4 mt-2">
                    <div className="row">
                        <div className="col-12 card-title">
                            <h3 className="mb-4 product_name">{itemInfo.name}</h3>
                            <p className="mb-2">ID: {itemInfo.id}</p>
                            <p className="mb-2">TYPE: {(itemInfo.type === 'factory') ? "Factory Design" : "Custom Design"}</p>
                            <p className="mb-2">UNIT PRICE: {itemInfo.price} $</p>
                        

                        <div className="col-12 pl-0">
                            <ul className="pagination justify-content-start set_quantity">
                                <li className="page-item">
                                    <button onClick={() => dispatch(decrementItemQuantity(itemInfo.appendIndex))} className="page-link ">
                                        <FaMinusCircle />
                                    </button>
                                </li>
                                <li className="page-item">
                                    <input
                                        type="text"
                                        name=""
                                        className="page-link"
                                        value={itemInfo.quantity}
                                        id="textbox"
                                        size={1}
                                    />
                                </li>
                                <li className="page-item">
                                    <button onClick={() => dispatch(incrementItemQuantity(itemInfo.appendIndex))} className="page-link">
                                        <FaPlusCircle />
                                    </button>
                                </li>
                            </ul>
                        </div>
                        </div>
                    </div>

                    <div className="row mt-1">
                        <div onClick={() => { dispatch(removeItem(itemInfo.appendIndex)) }} className="col-8 d-flex justify-content-between remove_wish">
                            <p>
                                <FaTrashAlt /> REMOVE ITEM
                            </p>
                        </div>
                        <div className="col-4 d-flex justify-content-end price_money">
                            <h3>$<span id="itemval">{itemInfo.price * itemInfo.quantity} </span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;