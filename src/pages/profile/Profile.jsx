import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import ProfileForm from "./ProfileForm";
import ChangePassword from "./ChangePassword";
import { getProfile } from "../../apis/userApi";

const Profile = () => {
  const [openProfile, setOpenProfile] = useState(false);
  const [openPassword, setOpenPassword] = useState(false);

  const [user, setUser] = useState(null);

  const loadUser = async () => {
    const  data  = await getProfile();
    console.log(data.birth)
    setUser(data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6">
      {/* Profile Card */}
      <div className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center gap-6 border border-gray-100">
        {/* Avatar */}
        <div className="avatar">
          <div className="w-28 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img
              src={
                user?.avatar ||
                "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              }
              alt="profile"
            />
          </div>
        </div>

        {/* User Info */}
        <div className="text-center space-y-1">
          <h2 className="text-2xl font-semibold text-gray-800">
            {user ? `${user.firstname} ${user.lastname}` : "Loading..."}
          </h2>
          <p className="text-gray-500">{user?.email}</p>
          <p className="text-gray-500">{user?.mobile}</p>
          <p className="text-gray-500">
            {user?.birth ? `DOB: ${user.birth}` : ""}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 mt-4">
          <button
            className="btn btn-primary"
            onClick={() => setOpenProfile(true)}
          >
            Edit Profile
          </button>

          <button
            className="btn btn-outline btn-primary"
            onClick={() => setOpenPassword(true)}
          >
            Change Password
          </button>
        </div>
      </div>

      {/* ====================== MODALS =========================== */}

      {/* Edit Profile Modal */}
      <Dialog open={openProfile} onClose={setOpenProfile} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogPanel className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
            <DialogTitle className="text-xl font-semibold mb-4">
              Edit Profile
            </DialogTitle>
            <ProfileForm />
          </DialogPanel>
        </div>
      </Dialog>

      {/* Change Password Modal */}
      <Dialog open={openPassword} onClose={setOpenPassword} className="relative z-50">
        <DialogBackdrop className="fixed inset-0 bg-black/30" />

        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <DialogPanel className="bg-white rounded-xl shadow-xl w-full max-w-lg p-6">
            <DialogTitle className="text-xl font-semibold mb-4">
              Change Password
            </DialogTitle>
            <ChangePassword />
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
};

export default Profile;
