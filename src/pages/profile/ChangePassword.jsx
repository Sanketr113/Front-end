import { useState } from "react";
import { toast } from "react-toastify";
import { updatePassword } from "../../apis/userApi";
import { Eye, EyeClosed } from "lucide-react";

export default function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const response = await updatePassword({ currentPassword, newPassword });

    if (response?.status === "success") {
      toast.success("Password updated successfully");
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } else {
      toast.error(response?.error || "Something went wrong");
    }
  };

  const InputWithToggle = ({
    label,
    value,
    onChange,
    show,
    setShow,
    name,
    id,
    required = true,
  }) => {
    return (
      <div className="form-control">
        <label className="label">
          <span className="label-text">{label}</span>
        </label>

        {/* container ensures icon sits inside input at end */}
        <div className="relative">
          <input
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            type={show ? "text" : "password"}
            required={required}
            className="input input-bordered w-full pr-12"
            autoComplete="new-password"
          />

          {/* icon button placed inside input, vertically centered */}
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            aria-label={show ? "Hide password" : "Show password"}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {show ? <EyeClosed size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Change Password</h2>

      <InputWithToggle
        label="Current Password"
        id="current-password"
        name="currentPassword"
        value={currentPassword}
        onChange={(e) => setCurrentPassword(e.target.value)}
        show={showCurrent}
        setShow={setShowCurrent}
      />

      <InputWithToggle
        label="New Password"
        id="new-password"
        name="newPassword"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        show={showNew}
        setShow={setShowNew}
      />

      <InputWithToggle
        label="Confirm New Password"
        id="confirm-password"
        name="confirmPassword"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        show={showConfirm}
        setShow={setShowConfirm}
      />

      <button type="submit" className="btn btn-primary w-full">
        Update Password
      </button>
    </form>
  );
}
