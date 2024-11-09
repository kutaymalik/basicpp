// src/services/api.js
import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7262/BasicApp/api/v1",
    headers: {
        "Content-Type": "application/json",
    },
});

export const setAuthToken = (token) => {
    if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
        delete api.defaults.headers.common["Authorization"];
    }
};

export default api;
