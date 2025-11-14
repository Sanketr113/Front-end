import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../apis/userAPI";
import { toast } from "react-toastify";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const onLogin = async () => {
        if (!email) {
            toast.warning("Please enter email");
            return;
        }
        if (!password) {
            toast.warning("Please enter password");
            return;
        }

        const response = await login(email, password);

        if (response.status === "success") {
            toast.success("Login successful");

            const token = response.data;
            localStorage.setItem("token", token);

            navigate("/home/allmovies");
        } else {
            toast.error(response.error || "Login failed");
        }
    };

    return (
        <div>
            <div className="bg-slate-900 md:h-screen">
                <div className="grid md:grid-cols-2 items-center gap-8 h-full">
                    <div className="max-md:order-1 p-4">
                        <img
                            src="https://readymadeui.com/signin-image.webp"
                            className="lg:max-w-[80%] w-full h-full object-contain block mx-auto"
                            alt="login-image"
                        />
                    </div>

                    <div className="flex items-center md:p-8 p-6 bg-white md:rounded-tl-[55px] md:rounded-bl-[55px] h-full">
                        <form className="max-w-lg w-full mx-auto">
                            <div className="mb-12">
                                <h3 className="text-slate-900 text-4xl font-bold">
                                    Sign in
                                </h3>
                                <p className="text-slate-600 text-sm mt-6">
                                    Don't have an account{" "}
                                    <Link
                                        to="/register"
                                        className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Register Here!!
                                    </Link>
                                </p>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <label className="text-slate-900 text-xs font-medium block mb-2">
                                        Email
                                    </label>
                                    <div className="relative flex items-center">
                                        <input
                                            onChange={(e) =>
                                                setEmail(e.target.value)
                                            }
                                            name="email"
                                            type="text"
                                            className="w-full text-sm border-b border-slate-300 focus:border-slate-800 pl-2 pr-8 py-3 outline-none"
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
                                            name="password"
                                            type="password"
                                            className="w-full text-sm border-b border-slate-300 focus:border-slate-800 pl-2 pr-8 py-3 outline-none"
                                            placeholder="Enter password"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 border-slate-300 rounded"
                                        />
                                        <label
                                            htmlFor="remember-me"
                                            className="text-slate-600 ml-3 text-sm">
                                            Remember me
                                        </label>
                                    </div>

                                    <div>
                                        <a
                                            href="#"
                                            className="text-blue-600 font-medium text-sm hover:underline">
                                            Forgot Password?
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-12">
                                <button
                                    type="button"
                                    onClick={onLogin}
                                    className="w-full py-3 px-6 text-sm font-medium cursor-pointer tracking-wider rounded-full text-white bg-slate-800 hover:bg-slate-900 focus:outline-none">
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
