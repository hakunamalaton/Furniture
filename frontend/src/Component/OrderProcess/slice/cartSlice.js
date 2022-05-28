import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const initialState = {
    status: "created",
    appendIndex: 0,
    someCoupons: [
        {
            name: "HARMONY1234",
            value: 25.00
        },
        {
            name: "PPL1234",
            value: 25.50
        },
        {
            name: "CODEGEN1234",
            value: 26.00
        }
    ],
    chosenCoupon: null,
    isCouponAdded: false,
    isCategoriesCouponChanceAppear: false,
    categoriesCounter: {
        "Sofas": 0,
        "Chair": 0,
        "Light": 0,
        "Bedding": 0,
    },
    cart: [],
    price: {
        total: 0,
        tax_percent: 11.2,
        tax: "",
        shipping: "",
        shippingOption: "",
        shippingScale: 1,
        final_price: 0,
        deliveryDate: "",
    },
    buyer: {
        fullName: "",
        address: {},
        phoneNum: "",
    },
    payment: {
        paymentOption: "",
    },
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        insertItem: (state, action) => {
            const newCartItem = action.payload;
            console.log("insertItem reducer's newCartItem", newCartItem);
            state.price.total += newCartItem.price * newCartItem.quantity;
            state.cart.push({ ...newCartItem, type: "custom", appendIndex: state.appendIndex });
            state.appendIndex = state.appendIndex + 1;
            state.categoriesCounter[newCartItem.category] += 1;
            let numOfCategoriesAppearInCart = 0;
            for (const categories in state.categoriesCounter) {
                if (state.categoriesCounter[categories] !== 0) {
                    numOfCategoriesAppearInCart += 1;
                }
            }
            if (numOfCategoriesAppearInCart >= 3) {
                state.isCategoriesCouponChanceAppear = true;
            }
            if (state.chosenCoupon === null) {
                state.chosenCoupon = state.someCoupons[Math.floor(Math.random() * state.someCoupons.length)];
            }
        },
        removeItem: (state, action) => {
            const appendIndex = action.payload;
            state.cart.forEach((cartItem) => {
                if (cartItem.appendIndex === appendIndex) {
                    state.price.total -= cartItem.price * cartItem.quantity;
                    state.categoriesCounter[cartItem.category] -= 1;
                    let numOfCategoriesAppearInCart = 0;
                    for (const categories in state.categoriesCounter) {
                        if (state.categoriesCounter[categories] !== 0) {
                            numOfCategoriesAppearInCart += 1;
                        }
                    }
                    if (numOfCategoriesAppearInCart == 3) {
                        state.isCategoriesCouponChanceAppear = true;
                    }
                    return;
                }
            });
            state.cart = state.cart.filter((cartItem) => cartItem.appendIndex !== appendIndex);
        },
        incrementItemQuantity: (state, action) => {
            const appendIndex = action.payload;
            state.cart.forEach((cartItem) => {
                if (cartItem.appendIndex === appendIndex) {
                    cartItem.quantity += 1;
                    state.price.total += cartItem.price;
                    return;
                }
            });
        },
        decrementItemQuantity: (state, action) => {
            const appendIndex = action.payload;
            state.cart.forEach((cartItem) => {
                if (cartItem.appendIndex === appendIndex && cartItem.quantity > 1) {
                    cartItem.quantity -= 1;
                    state.price.total -= cartItem.price;
                    return;
                }
            });
        },
        updateAddress: (state, action) => {
            const buyerInfo = action.payload;
            state.buyer.fullName = buyerInfo.fullname;
            state.buyer.phoneNum = buyerInfo.phoneNum;
            state.buyer.address = {
                ...buyerInfo,
            };
            state.price.shipping = buyerInfo.price;
        },
        updateShippingMethod: (state, action) => {
            const { shippingOption, shippingScale } = action.payload;
            state.price.shippingOption = shippingOption;
            state.price.shippingScale = shippingScale;
        },
        updateShippingDate: (state, action) => {
            state.price.deliveryDate = action.payload;
        },
        updatePaymentMethod: (state, action) => {
            state.payment.paymentOption = action.payload;
        },
        updateFinalPrice: (state, action) => {
            state.price.final_price =
                state.price.total * (1 + state.price.tax_percent / 100) +
                state.price.shipping * state.price.shippingScale;
        },
        updateIsCouponAdded: (state, action) => {
            const newIsCouponAdded = action.payload;
            state.isCouponAdded = newIsCouponAdded;
        },
        updateIsCategoriesCouponChanceAppear: (state, action) => {
            const newIsCategoriesCouponChanceAppear = action.payload;
            state.isCategoriesCouponChanceAppear = newIsCategoriesCouponChanceAppear;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => { });
    },
});

export default cartSlice.reducer;

export const {
    insertItem,
    removeItem,
    incrementItemQuantity,
    decrementItemQuantity,
    updateAddress,
    updateShippingMethod,
    updateShippingDate,
    updatePaymentMethod,
    updateFinalPrice,
    updateIsCouponAdded,
    updateIsCategoriesCouponChanceAppear
} = cartSlice.actions;

export const createOrder = createAsyncThunk("cart/createOrder", async (orderState, thunkAPI) => {
    try {
        const state = thunkAPI.getState();
        /**
         * CORS ERROR !!! heroku not accept request from localhost:3000
         */
        // const PaymentAPIResponse = await axios.post(`https://furniture-payment.herokuapp.com/payment-paypal?total=${state.cart.price.final_price}`);
        try {
            const cartState = state.cart;
            console.log("createOrder final", cartState);
            const processedOrderData = {};
            processedOrderData["order"] = {
                status: "Payed",
                user_id: state.account.token,
                address: state.cart.buyer.address.location,
                total_price: state.cart.price.final_price,
                description: "Smth",
            };
            processedOrderData["products"] = state.cart.cart.map((cartItem) => cartItem.id);
            processedOrderData["quantity"] = state.cart.cart.map((cartItem) => cartItem.quantity);
            processedOrderData["color"] = state.cart.cart.map((cartItem) => cartItem.color);
            processedOrderData["size"] = state.cart.cart.map((cartItem) => cartItem.size);
            console.log("Processed Order Data", processedOrderData);
            await axios.post(
                `${SERVER_URL}/users/${state.account.token}/orders`,
                processedOrderData
            );

            return {};
        } catch (err) {
            console.log("Create Order Error", err);
        }
    } catch (err) {
        console.log("Payment API Error", err);
    }
});

const selectCartItemById = createSelector(
    (state) => state.cart,
    (cart) => cart.cart
);
