import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const initialState = {
    fullname: "",
    email: "",
    phoneNum: "",
    token: "",
    status: "guest",
    addressList: [
        {
            "fullName": "Mai Duc Long",
            "phone_number": "1231231231",
            "location": "Dong Hoa Sub-district, Di An City, Binh Duong Province",
            "description": "KTX Khu A, DHQG HCM",
            "price": 19.99
        },
        {
            "fullName": "Mai Duc Long",
            "phone_number": "1231231231",
            "location": "Sub-district 14, District 10, Ho Chi Minh",
            "description": "268 Ly Thuong Kiet",
            "price": 29.99
        },
        {
            "fullName": "Mai Duc Long",
            "phone_number": "1231231231",
            "location": "Tu Ha Town, Huong Tra District, Thua Thien Hue Province",
            "description": "20 Tran Quoc Tuan",
            "price": 59.99
        }
    ],
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        initAccountWithCookies(state, action) {
            console.log("Reducer's initAccountWithCookies action payload", action.payload);
            const { email, token, addressList } = action.payload;
            state.email = email;
            state.token = token;
            state.status = "member";
        },
        loginAccount(state, action) {
            const { token, email } = action.payload;
            state.email = email;
            state.token = token;
            state.status = "member";
        },
        logoutAccount(state, action) {
            state.email = "";
            state.token = "";
            state.status = "guest";
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getUserAddresses.fulfilled, (state, action) => {
                const newAddressesList = action.payload;
                state.addressList = newAddressesList;
            })
            .addCase(addNewUserAddress.fulfilled, (state, action) => {
                const { location, description, price, phone_number } = action.payload;
                state.addressList.push({ location, description, price, phone_number });
            })
    }
})

export const { loginAccount, logoutAccount, initAccountWithCookies } = accountSlice.actions;

export default accountSlice.reducer;

export const getUserAddresses = createAsyncThunk('account/getUserAddresses', async (token, thunkAPI) => {
    try {
        const getUserAddressesResponse = await axios.get(`${SERVER_URL}/users/${token}/address`);
        console.log("getUserAddresses data", getUserAddressesResponse.data);
        return getUserAddressesResponse.data.address;
    } catch (err) {
        console.log("[ERROR!]: " + err);
        return thunkAPI.rejectWithValue({ messages: 'Get Address Error' });
    }
})

export const addNewUserAddress = createAsyncThunk('account/addNewUserAddress', async (data, thunkAPI) => {
    try {
        const addAddressResponse = await axios.post(`${SERVER_URL}/users/${data.userId}/address`, data);
        console.log("In addNewUserAddress thunk data", data);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue({ message: "Add Address Error" });
    }

})