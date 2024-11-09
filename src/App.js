import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Register from "./components/Register";
import Login from "./components/Login";
import UserProfile from "./components/UserProfile";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { setAuthToken } from "./services/api";

function App() {
    const token = useSelector((state) => state.auth.token);

    useEffect(() => {
        setAuthToken(token);
    }, [token]);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/profile" element={<UserProfile />} />
            </Routes>
            <ToastContainer position="bottom-right" autoClose={5000} hideProgressBar closeOnClick />
        </Router>
    );
}

export default App;
