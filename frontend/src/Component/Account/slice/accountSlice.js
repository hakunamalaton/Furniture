import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullname: "maiduclong2001",
    email: "maiduclong@gmail.com",
    phoneNum: "(+84)1231231231",
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
            .addCase(loginAccount.fulfilled, (state, action) => { })
            .addCase(loginAccount.rejected, (state, action) => { })
    }
})

export default accountSlice.reducer;

export const loginAccount = createAsyncThunk('account/loginAccount', async () => { })