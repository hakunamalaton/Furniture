import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { useSelector, useDispatch } from "react-redux";
import { updateIsCategoriesCouponChanceAppear } from "../slice/cartSlice";

export default function CategoriesCouponModal() {
    const dispatch = useDispatch();
    const isCategoriesCouponChanceAppear = useSelector(state => state.cart.isCategoriesCouponChanceAppear);
    const categoriesCounter = useSelector(state => state.cart.categoriesCounter);

    let theLeftOverCategories = "";
    for (const category in categoriesCounter) {
        if (categoriesCounter[category] === 0) {
            theLeftOverCategories = category
        }
    }

    return (
        <Modal show={isCategoriesCouponChanceAppear} onHide={() => dispatch(updateIsCategoriesCouponChanceAppear(false))}>
            <Modal.Header closeButton>
                <Modal.Title>Categories Coupon Chance</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                {
                    (theLeftOverCategories === "") ? <p>{`Congratulation, you have granted 5% coupon for buying item from every cateogries. Please proceed to Payment Page to confirm.`}</p> : <p>{`Pick one more item from the category '${theLeftOverCategories}' to get 5 percent coupon`}</p>
                }
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={() => dispatch(updateIsCategoriesCouponChanceAppear(false))}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}