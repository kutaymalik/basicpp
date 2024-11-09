import api, { setAuthToken } from "./api";
import { setToken, clearToken } from "../store/authSlice";
import { store } from "../store/store";

export const register = async (userData) => {
    const response = await api.post("/User/CreateUser", userData);
    return response.data;
};

export const login = async (loginData) => {
    const response = await api.post("/User/Login", loginData);

    if (response.data.isSuccessful) {
        const token = response.data.data.token;
        
        // Token'ı Redux state'e kaydedin
        store.dispatch(setToken(token));
        setAuthToken(token); // Axios default header olarak ekleyin

        return response.data;
    }
    throw new Error("Login failed");
};

export const logout = () => {
    store.dispatch(clearToken());
    setAuthToken(null); // Axios default header'ı temizle
};

export const getUser = async (id) => {
    const endpoint = id ? `/User/${id}` : `/User`; // ID varsa /User/id yoksa /User
    const response = await api.get(endpoint);
    return response.data;
};

export const updateUser = async (id, updateData) => {
    const response = await api.put(`/User/UpdateUser/${id}`, updateData);
    return response.data;
};

export const deleteUser = async (id) => {
    const response = await api.delete(`/User/DeleteUser/${id}`);
    return response.data;
};
