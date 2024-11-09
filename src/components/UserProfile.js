// src/components/UserProfile.js
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getUser, updateUser, deleteUser } from "../services/authService";
import EditProfileModal from "./EditProfileModal";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

function UserProfile() {
    const [userData, setUserData] = useState({ UserName: "", Email: "", Password: "" });
    const [id, setId] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            if (token) {
                const response = await getUser();
                if (response.isSuccessful) {
                    setUserData({
                        UserName: response.data.userName || "",
                        Email: response.data.email || "",
                        Password: "",
                    });
                    setId(response.data.id);
                } else {
                    toast.error("Failed to load user data.");
                }
            }
        };
        fetchData();
    }, [token]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({ ...prevData, [name]: value || "" }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await updateUser(id, userData);
            if (response.isSuccessful) {
                toast.success(response.Message || "Profile updated successfully.");
            } else {
                toast.error(response.Message || "Profile update failed.");
            }
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
            toast.error("Update failed!");
        }
    };

    const handleDelete = async () => {
        try {
            const response = await deleteUser(id);
            if (response.isSuccessful) {
                toast.success(response.Message || "Account deleted successfully.");
                navigate("/login");
            } else {
                toast.error(response.Message || "Account deletion failed.");
            }
        } catch (error) {
            console.error(error);
            toast.error("Delete failed!");
        }
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openDeleteModal = () => {
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">User Profile</h2>
                <div className="space-y-4">
                    <p><strong>Username:</strong> {userData.UserName}</p>
                    <p><strong>Email:</strong> {userData.Email}</p>
                </div>
                <button
                    onClick={openModal}
                    className="w-full bg-blue-500 text-white font-semibold py-2 mt-6 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Update Profile
                </button>
                <button
                    onClick={openDeleteModal}
                    className="w-full mt-4 bg-red-500 text-white font-semibold py-2 rounded-lg hover:bg-red-600 transition duration-300"
                >
                    Delete Account
                </button>

                {isModalOpen && (
                    <EditProfileModal
                        userData={userData}
                        handleChange={handleChange}
                        handleUpdate={handleUpdate}
                        handleClose={closeModal}
                    />
                )}

                {isDeleteModalOpen && (
                    <ConfirmDeleteModal
                        handleDelete={handleDelete}
                        handleClose={closeDeleteModal}
                    />
                )}
            </div>
        </div>
    );
}

export default UserProfile;
