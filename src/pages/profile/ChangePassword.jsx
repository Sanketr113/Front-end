import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../apis/config";
import { toast } from "react-toastify";
import { updatePassword } from "../../apis/userApi";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPassword === newPassword) {
      const response = await updatePassword(newPassword);
      console.log(response);
      toast.success("password updated successfully");
    } else {
      toast.error("passwords do not match");
    }
  };

  return (
    <form class="max-w-md mx-auto text-white">
      <div class="relative z-0 w-full mb-5 group ">
        <input
          type="password"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          onChange={(e) => {
            setCurrentPassword(e.target.value);
          }}
          required
        />
        <label
          for="floating_email"
          class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          old password
        </label>
      </div>
      <div class="relative z-0 w-full mb-5 group ">
        <input
          type="password"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          onChange={(e) => {
            setNewPassword(e.target.value);
          }}
          required
        />
        <label
          for="floating_email"
          class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          new password
        </label>
      </div>
      <div class="relative z-0 w-full mb-5 group ">
        <input
          type="password"
          name="floating_email"
          id="floating_email"
          class="block py-2.5 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
          placeholder=" "
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          required
        />
        <label
          for="floating_email"
          class="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          confirm password
        </label>
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        class="text-white bg-primary box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
}
