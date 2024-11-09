// src/components/Register.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { toast } from "react-toastify";

function Register() {
    const [userData, setUserData] = useState({ UserName: "", Email: "", Password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(userData);
            if (response.isSuccessful) {
                toast.success("Registration successful!");
                navigate("/login");
            } else {
                toast.error(response.Message || "Registration failed!");
            }
        } catch (error) {
            console.error(error);
            toast.error("Registration failed!");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="w-full max-w-sm bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">Register</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-2" htmlFor="UserName">
                        Username
                    </label>
                    <input
                        type="text"
                        name="UserName"
                        id="UserName"
                        placeholder="Enter your username"
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
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
                    Register
                </button>

                <div className="mt-4 text-center">
                    <p className="text-gray-600">Already have an account?</p>
                    <button
                        type="button"
                        onClick={() => navigate("/login")}
                        className="mt-2 text-blue-500 hover:text-blue-700 font-semibold"
                    >
                        Login here
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
