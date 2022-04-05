import React, { useState } from "react";
import { FaMinusCircle } from 'react-icons/fa';
import { FaPlusCircle } from 'react-icons/fa';
import { FaTrashAlt } from 'react-icons/fa';

const CartItem = (props) => {
    const { id, priceState, setPriceState, cartState, setCartState } = props;
    let itemInfo = null;
    cartState.forEach(cartItem => {
        if (cartItem.id === id) {
            itemInfo = { ...cartItem }; return;
        }
    });
    if (itemInfo === null) { alert("ERROR: item not found in cart by id") }
    const IncrementItemQuantity = () => {
        const newCartState = [...cartState];
        cartState.forEach(cartItem => {
            if (cartItem.id === id) {
                cartItem.quantity += 1;
                console.log("Increment Item Click", newCartState);
                setPriceState({ ...priceState, total: priceState.total + cartItem.price }); return;
            }
        });
        setCartState(newCartState);
    }
    const DecrementItemQuantity = () => {
        const newCartState = [...cartState];
        cartState.forEach(cartItem => {
            if (cartItem.id === id) {
                if (cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    setPriceState({ ...priceState, total: priceState.total - cartItem.price }); return;
                } else {
                    return;
                }
            }
        });
        setCartState(newCartState);
    }
    const removeItem = () => {
        console.log("id", id);
        let newCartState = cartState.filter(cartItem => {
            if (id === cartItem.id) {
                setPriceState({ ...priceState, total: priceState.total - cartItem.price * cartItem.quantity }); return false;
            }
            return true;
        })
        console.log(newCartState);
        setCartState(newCartState);
    }
    return (
        <div className="card p-4">
            <div className="row">
                <div className="col-md-4 col-9 bg-light d-flex justify-content-center align-items-center shadow product_img">
                    <img src={itemInfo.image} className="img-fluid" alt="cart img" />
                </div>

                <div className="col-md-7 col-11 px-4 mt-2">
                    <div className="row">
                        <div className="col-6 card-title">
                            <h1 className="mb-4 product_name">{itemInfo.name}</h1>
                            <p className="mb-2">ID: {itemInfo.id}</p>
                            <p className="mb-2">TYPE: {(itemInfo.type === 'factory') ? "Factory Design" : "Custom Design"}</p>
                            <p className="mb-2">UNIT PRICE: {itemInfo.price} $</p>
                        </div>

                        <div className="col-6">
                            <ul className="pagination justify-content-end set_quantity">
                                <li className="page-item">
                                    <button onClick={DecrementItemQuantity} className="page-link ">
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
                                    <button onClick={IncrementItemQuantity} className="page-link">
                                        <FaPlusCircle />
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row">
                        <div onClick={removeItem} className="col-8 d-flex justify-content-between remove_wish pt-4">
                            <p>
                                <FaTrashAlt /> REMOVE ITEM
                            </p>
                        </div>
                        <div className="col-4 d-flex justify-content-end price_money pt-4">
                            <h3>$<span id="itemval">{itemInfo.price * itemInfo.quantity} </span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;