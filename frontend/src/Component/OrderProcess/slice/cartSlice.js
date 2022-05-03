import { createSelector, createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const initialState = {
    status: "created",
    appendIndex: 0,
    cart: [
        // {
        //     type: "factory",
        //     quantity: 2,
        //     id: "ID001",
        //     name: "Josie Upholstered Low Profile Platform Bed",
        //     image: "https://i.imgur.com/Q12CDlu.png",
        //     price: 599.99,
        //     third_party:
        //         "Carbono Design#https://www.carbonodesign.com.br/en/about",
        //     color: "Charcoal Gray#36454F",
        //     size: "Full Size#42.5'' H x 58.5'' W x 80.5'' L# 83.5 lb",
        //     description:
        //         "You can stop browsing the internet right now; the Josie Upholstered Bed is the mid-century modern frame you have been looking for! With a soft velvet upholstery and a horizontal ribbed tufting pattern in the headboard, this upholstered bed will make the perfect addition to your master, guest, or teen’s bedroom. Built on a strong metal frame that features metal side rails and an additional center metal leg, this bed frame also includes a bentwood slat system and sturdy plastic legs to provide mattress support and allow for mattress breathability. The slats also remove the need for you to purchase any additional box spring or foundation. No matter the room, Josie’s simple yet trendy design will complement your existing furniture pieces and bring your bedroom décor to the next level. Available in multiple sizes and color options, there is the perfect Josie Upholstered Bed available for you!",
        //     category: "bed",
        //     overview: [
        //         "Headboard Included",
        //         "Footboard Included",
        //         "Center Supports Included",
        //         "Warranty Length: 1 Year",
        //     ],
        // },
        // {
        //     type: "custom",
        //     quantity: 2,
        //     id: "ID002",
        //     name: "Ethnic Sofa",
        //     image: "https://i.imgur.com/VNuUy1K.jpeg",
        //     price: 299.99,
        //     third_party:
        //         "Carbono Design#https://www.carbonodesign.com.br/en/about",
        //     color: "Navy Blue#000080",
        //     size: "Only Size# 30.5'' H x 78'' W x 34'' L#95.5 lb",
        //     description:
        //         "The Ethnic Sofa defines the Livingspaces Philosophy. Clean lines, Comfort and distinctive design details.",
        //     category: "sofa",
        //     overview: [
        //         "Headboard Included",
        //         "Footboard Included",
        //         "Center Supports Included",
        //         "Warranty Length: 1 Year",
        //     ],
        // },
    ],
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
        },
        removeItem: (state, action) => {
            const appendIndex = action.payload;
            state.cart.forEach((cartItem) => {
                if (cartItem.appendIndex === appendIndex) {
                    state.price.total -= cartItem.price * cartItem.quantity;
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
                if (cartItem.appendIndex === appendIndex && cartItem.quantity > 0) {
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
    },
    extraReducers: (builder) => {
        builder.addCase(createOrder.fulfilled, (state, action) => {});
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
                status: "Created",
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
            const createOrderResponse = await axios.post(
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
