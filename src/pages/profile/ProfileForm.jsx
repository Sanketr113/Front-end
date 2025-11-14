import { useEffect, useState } from "react";
import { getProfile, updateProfile } from "../../apis/userApi";
import { toast } from "react-toastify";

export default function ProfileForm() {
  const [email, setEmail] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mobile, setMobile] = useState("");
  const [birth, setBirth] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await updateProfile({
      email,
      birth,
      firstname,
      lastname,
      mobile,
    });

    if (response.status === "success") {
      toast.success("Profile updated successfully");
    } else {
      toast.error(response.error);
    }
  };

  const loadUser = async () => {
    const data = await getProfile();
    setFirstName(data.firstname);
    setLastName(data.lastname);
    setBirth(data.birth);
    setEmail(data.email);
    setMobile(data.mobile);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
    >
      <h2 className="text-2xl font-semibold text-gray-800">Update Profile</h2>

      {/* Email */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email Address</span>
        </label>
        <input
          type="email"
          className="input input-bordered w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      {/* Birthdate */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Birthdate</span>
        </label>
        <input
          type="date"
          className="input input-bordered w-full"
          value={birth}
          onChange={(e) => setBirth(e.target.value)}
          required
        />
      </div>

      {/* First & Last Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Mobile */}
      <div className="form-control">
        <label className="label">
          <span className="label-text">Mobile Number</span>
        </label>
        <input
          type="tel"
          className="input input-bordered w-full"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
        />
      </div>

      {/* Submit */}
      <button type="submit" className="btn btn-primary w-full">
        Save Changes
      </button>
    </form>
  );
}
