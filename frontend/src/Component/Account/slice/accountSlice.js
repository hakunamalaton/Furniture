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
        //     .addCase(loginAccount.fulfilled, (state, action) => {
        //         const { token, email, success } = action.payload;
        //         console.log("action.payload", action.payload);
        //         if (success) {
        //             state.email = email;
        //             state.token = token;
        //             state.status = 'member';
        //         }
        //     })

    }
})

export const { loginAccount, logoutAccount } = accountSlice.actions;

export default accountSlice.reducer;

// export const loginAccount = createAsyncThunk('account/loginAccount', async ({ requestBody, headers }, thunkAPI) => {
//     const loginResponse = await axios.post(`${SERVER_URL}/sign-in`, requestBody, headers);
//     console.log("loginResponse", loginResponse);
//     if (loginResponse.data.code === 0) {
//         const token = loginResponse.data.token;
//         const email = requestBody["user"]["email"];
//         console.log("{token, email}", { token, email });
//         return { token, email, success: true };
//     } else {
//         return { token: null, email: null, success: false };
//     }
// })

export const getUserAddresses = createAsyncThunk('account/getUserAddresses', async (token, thunkAPI) => {
    try {
        const getUserAddressesResponse = await axios.get(`http://localhost:8000/users/${token}/address`);
        console.log("getUserAddresses data", getUserAddressesResponse.data);
        return getUserAddressesResponse.data.address;
    } catch (err) {
        console.log("[ERROR!]: " + err);
        return thunkAPI.rejectWithValue({ messages: 'Get Address Error' });
    }
})

export const addNewUserAddress = createAsyncThunk('account/addNewUserAddress', async (data, thunkAPI) => {
    try {
        const addAddressResponse = await axios.post(`http://localhost:8000/users/${data.userId}/address`, data);
        console.log("In addNewUserAddress thunk data", data);
        return data;
    } catch (err) {
        return thunkAPI.rejectWithValue({ message: "Add Address Error" });
    }

})