import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const SERVER_URL = process.env.REACT_APP_SERVER_URL;

const initialState = {
    fullname: "maiduclong2001",
    email: "maiduclong@gmail.com",
    phoneNum: "(+84)1231231231",
    token: "",
    status: "guest",
    addressList: [
        {
            "fullName": "Mai Duc Long",
            "phoneNum": "(+84)1231231231",
            "city": "Binh Duong Province",
            "district": "Di An City",
            "town": "Dong Hoa Sub-district",
            "description": "KTX Khu A, DHQG HCM",
            "price": 19.99
        },
        {
            "fullName": "Mai Duc Long",
            "phoneNum": "(+84)1231231231",
            "city": "Ho Chi Minh",
            "district": "District 10",
            "town": "Sub-district 14",
            "description": "268 Ly Thuong Kiet",
            "price": 29.99
        },
        {
            "fullName": "Mai Duc Long",
            "phoneNum": "(+84)1231231231",
            "city": "Thua Thien Hue Province",
            "district": "Huong Tra District",
            "town": "Tu Ha Town",
            "description": "20 Tran Quoc Tuan",
            "price": 59.99
        }
    ],
}

const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder
            .addCase(loginAccount.fulfilled, (state, action) => {
                const { token, email, success } = action.payload;
                if (success) {
                    state.email = email;
                    state.token = token;
                    state.status = true;
                } else {
                }
            })
    }
})

export default accountSlice.reducer;

export const loginAccount = createAsyncThunk('account/loginAccount', async ({ requestBody, headers }, thunkAPI) => {
    const loginResponse = await axios.post(`${SERVER_URL}/sign-in`, requestBody, headers);
    console.log("loginResponse", loginResponse);
    if (loginResponse.data.code === 0) {
        const token = loginResponse.data.token;
        const email = requestBody["user"]["email"];
        console.log("{token, email}", { token, email });
        console.log("LOL", { token, email, success: true });
        return { token, email, success: true };
    } else {
        return { token: null, email: null, success: false };
    }
})