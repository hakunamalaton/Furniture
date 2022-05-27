import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import momoBtn from "../../../picture/momoBtn.png";
import paypalBtn from "../../../picture/paypalBtn.jpg";
import { updateFinalPrice, createOrder } from "../../OrderProcess/slice/cartSlice";

const Total = ({ priceState, paymentOption }) => {
    const dispatch = useDispatch();

    const OrderState = useSelector((state) => state.cart);
    const OrderPriceState = useSelector((state) => state.cart.price);
    const categoriesCounter = useSelector((state) => state.cart.categoriesCounter);
    const isCouponAdded = useSelector(state => state.cart.isCouponAdded);
    const chosenCoupon = useSelector(state => state.cart.chosenCoupon);

    const [categoriesCouponFee, setCategoriesCouponFee] = useState(0);

    useEffect(() => {
        console.log("[Total.js] categoriesCounter", categoriesCounter);
        console.log("[Total.js] is categoriesCouponFee achieved", categoriesCounter['Light'] && categoriesCounter['Chair'] && categoriesCounter['Sofas'] && categoriesCounter['Bedding']);
        if ((categoriesCounter['Light'] && categoriesCounter['Chair'] && categoriesCounter['Sofas'] && categoriesCounter['Bedding'])) {
            setCategoriesCouponFee((OrderPriceState.total * 5) / 100);
        }
    }, [])

    console.log("[Total.js] categoriesCouponFee", categoriesCouponFee);

    const taxFee = (OrderPriceState.total * OrderPriceState.tax_percent) / 100;

    function handlePayWithPayPal() {
        dispatch(updateFinalPrice());
        // console.log("Pay with PayPal");
        dispatch(createOrder(OrderState));
        // history.push("/transaction-history");
        let total = (
            OrderPriceState.total +
            taxFee -
            categoriesCouponFee +
            (OrderPriceState.shipping === ""
                ? 0
                : OrderPriceState.shipping * OrderPriceState.shippingScale)
            -
            (isCouponAdded && chosenCoupon ? chosenCoupon.value : 0)
        ).toFixed(2);
        window.location.href = `https://furniture-payment.herokuapp.com/payment-paypal?total=${total}`
    }
    const handlePayWithMomo = () => {
        dispatch(updateFinalPrice());
        // console.log("Pay with PayPal");
        dispatch(createOrder(OrderState));
        // history.push("/transaction-history");
        let total =
            23000 *
            Math.round(
                (
                    OrderPriceState.total +
                    taxFee -
                    categoriesCouponFee +
                    (OrderPriceState.shipping === ""
                        ? 0
                        : OrderPriceState.shipping * OrderPriceState.shippingScale)
                    -
                    (isCouponAdded && chosenCoupon ? chosenCoupon.value : 0)
                ).toFixed(2)
            );
        window.open(
            `https://furniture-payment.herokuapp.com/payment-momo?amount=${total}`,
            "_blank"
        );
    };

    console.log("Total.js priceState", priceState);
    return (
        <div className="right_side p-3" style={{ backgroundColor: "#A6DEFC" }}>
            <div>
                <h2 className="product_name mb-5">The Total Amount Of</h2>
                <div className="price_indiv d-flex justify-content-between">
                    <p>Total Item Price</p>
                    <p>
                        $<span id="product_total_amt">{OrderPriceState.total.toFixed(2)}</span>
                    </p>
                </div>
                <div className="price_indiv d-flex justify-content-between">
                    <p>Shipping Fee</p>
                    <p>
                        <span id="shipping_charge">
                            {OrderPriceState.shipping === ""
                                ? "Not yet calculated"
                                : `$${OrderPriceState.shipping.toFixed(
                                    2
                                )} x ${OrderPriceState.shippingScale.toFixed(2)}`}
                        </span>
                    </p>
                </div>

                <div className="total-amt d-flex justify-content-between">
                    <p>Tax ({OrderPriceState.tax_percent}% Total):</p>
                    <p>
                        $<span id="total_cart_amt">{taxFee.toFixed(2)}</span>
                    </p>
                </div>

                {
                    (categoriesCouponFee !== 0) && (
                        <div className="total-amt d-flex justify-content-between">
                            <p>Categories Combo(5% Discount):</p>
                            <p>
                                -$<span id="total_cart_amt">{categoriesCouponFee.toFixed(2)}</span>
                            </p>
                        </div>
                    )
                }

                {
                    (isCouponAdded) && (
                        <div className="total-amt d-flex justify-content-between">
                            <p>{`Coupon ${chosenCoupon.name}`}</p>
                            <p>
                                -$<span id="total_cart_amt">{chosenCoupon.value.toFixed(2)}</span>
                            </p>
                        </div>
                    )
                }
                <hr />
                <div className="total-amt d-flex justify-content-between font-weight-bold">
                    <p>TOTAL PRICE:</p>
                    <p>
                        $
                        <span id="total_cart_amt">
                            {(
                                OrderPriceState.total +
                                taxFee -
                                categoriesCouponFee +
                                (OrderPriceState.shipping === ""
                                    ? 0
                                    : OrderPriceState.shipping * OrderPriceState.shippingScale)
                                -
                                (isCouponAdded && chosenCoupon ? chosenCoupon.value : 0)
                            ).toFixed(2)}
                        </span>
                    </p>
                </div>
                <div className="row justify-content-md-center pt-5">
                    {paymentOption === "paypal" && (
                        <div className="pay-button">
                            <div className="paypal-btn-div">
                                <img
                                    src={paypalBtn}
                                    alt=""
                                    width={200}
                                    height={60}
                                    onClick={() => {
                                        handlePayWithPayPal();
                                    }}
                                />
                            </div>
                        </div>
                    )}
                    {paymentOption === "momo" && (
                        <div className="pay-button">
                            <div
                                onClick={() => {
                                    handlePayWithMomo();
                                }}
                                className="momo-btn-div"
                            >
                                <img src={momoBtn} alt="" width={300} height={50} />
                            </div>
                        </div>
                    )}
                    {paymentOption === "credit" && <div className="pay-button"></div>}
                </div>
            </div>
        </div>
    );
};

export default Total;
