// src/components/Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/authService";
import { toast } from "react-toastify";

function Login() {
    const [loginData, setLoginData] = useState({ Email: "", Password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginData);
            if (response.isSuccessful) {
                toast.success("Login successful!");
                navigate("/profile");
            } else {
                toast.error(response.Message || "Login failed!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Login failed!");
        }
    };

    const goToRegister = () => {
        navigate("/register");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="Email">
                        Email
                    </label>
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        placeholder="Enter your email"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="Password">
                        Password
                    </label>
                    <input
                        type="password"
                        name="Password"
                        id="Password"
                        placeholder="Enter your password"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Login
                </button>
                <div className="mt-4 text-center">
                    <p className="text-gray-600">Don't have an account?</p>
                    <button
                        type="button"
                        onClick={goToRegister}
                        className="mt-2 text-blue-500 hover:text-blue-700 font-semibold"
                    >
                        Register here
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
