// src/store/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Başlangıç durumunu `localStorage`'dan yükle
const initialState = {
    token: localStorage.getItem("token") || null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
            localStorage.setItem("token", action.payload); // `localStorage`'a kaydedin
        },
        clearToken: (state) => {
            state.token = null;
            localStorage.removeItem("token"); // `localStorage`'dan silin
        },
    },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
