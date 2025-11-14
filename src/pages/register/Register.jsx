import React, { useState } from "react";
import "./Register.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../apis/userAPI";

function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");

    const navigate = useNavigate();

    const onRegister = async () => {
        if (!firstName) return toast.warning("Please enter first name");
        if (!lastName) return toast.warning("Please enter last name");
        if (!email) return toast.warning("Please enter email");
        if (!phone) return toast.warning("Please enter phone number");
        if (!password) return toast.warning("Please enter password");
        if (!confirmPassword) return toast.warning("Please confirm password");
        if (password !== confirmPassword)
            return toast.warning("Passwords do not match");

        const response = await register(
            firstName,
            lastName,
            email,
            password,
            phone,
            birthdate
        );

        if (response.status === "success") {
            toast.success("Registration successful");
            navigate("/");
        } else {
            toast.error(response.error);
        }
    };

    return (
        <div className="relative">
            <div className="h-[540px]">
                <img
                    src="https://readymadeui.com/cardImg.webp"
                    alt="Banner"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative -mt-90 m-4">
                <form className="bg-white max-w-xl w-full mx-auto shadow-[0_2px_10px_-3px_rgba(14,14,14,0.3)] p-6 sm:p-8 rounded-2xl">
                    <div className="mb-12">
                        <h1 className="text-slate-900 text-3xl font-medium text-center">
                            Register
                        </h1>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                First Name
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) =>
                                        setFirstName(e.target.value)
                                    }
                                    type="text"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter first name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                Last Name
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) =>
                                        setLastName(e.target.value)
                                    }
                                    type="text"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter last name"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                Email
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    type="text"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    type="password"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter password"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                Confirm Password
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) =>
                                        setConfirmPassword(e.target.value)
                                    }
                                    type="password"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Confirm password"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                Mobile
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) => setPhone(e.target.value)}
                                    type="tel"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                    placeholder="Enter mobile number"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="text-slate-900 text-xs font-medium block mb-2">
                                Birthdate
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    onChange={(e) =>
                                        setBirthdate(e.target.value)
                                    }
                                    type="date"
                                    className="w-full bg-transparent text-sm border-b border-slate-300 focus:border-blue-500 pl-2 pr-8 py-3 outline-none"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-12">
                        <button
                            type="button"
                            onClick={onRegister}
                            className="w-full py-2.5 px-4 text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 cursor-pointer transition-all">
                            Register
                        </button>

                        <p className="text-slate-600 text-sm mt-6 text-center">
                            Already have an account?
                            <Link
                                to="/"
                                className="text-blue-500 font-medium hover:underline ml-1">
                                Login here
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
