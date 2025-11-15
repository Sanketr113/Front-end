import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState, useEffect, useRef } from "react";

export default function ShareModal({
  openShare,
  setOpenShare,
  users,
  selectedUserIds,
  setSelectedUserIds,
  saveShare,
}) {
  const [search, setSearch] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredUsers = users.filter((u) => {
    const term = search.toLowerCase();
    return (
      u.email.toLowerCase().includes(term) ||
      `${u.firstname} ${u.lastname}`.toLowerCase().includes(term)
    );
  });

  const toggleUser = (uid) => {
    setSelectedUserIds((prev) =>
      prev.includes(uid) ? prev.filter((id) => id !== uid) : [...prev, uid]
    );
  };

  const removeTag = (uid) => {
    setSelectedUserIds((prev) => prev.filter((id) => id !== uid));
  };

  return (
    <Dialog open={openShare} onClose={setOpenShare}>
      <DialogBackdrop className="fixed inset-0 bg-black/40" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-xl p-6 w-full max-w-md shadow-2xl">
          <DialogTitle className="text-lg font-bold mb-4">
            Share Review
          </DialogTitle>

          {/* ---- Custom MULTI-SELECT ---- */}
          <div className="mb-4 relative" ref={dropdownRef}>
            <div
              className="min-h-12 border rounded-lg p-2 flex items-center flex-wrap gap-2 cursor-pointer"
              onClick={() => setOpenDropdown(!openDropdown)}
            >
              {/* Selected Tags */}
              {selectedUserIds.map((uid) => {
                const user = users.find((u) => u.uid === uid);
                return (
                  <div
                    key={uid}
                    className="flex items-center bg-white border border-gray-300 rounded-full px-2 py-1"
                  >
                    <img
                      src={user.profile || `https://ui-avatars.com/api/?name=${user.firstname}`}
                      className="w-6 h-6 rounded-full mr-2"
                    />
                    <span className="text-sm">{user.firstname}</span>

                    <button
                      className="ml-2 text-gray-500 hover:text-red-600"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeTag(uid);
                      }}
                    >
                      ✕
                    </button>
                  </div>
                );
              })}

              {/* Search Input */}
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={selectedUserIds.length === 0 ? "Select users..." : ""}
                className="flex-1 min-w-[100px] p-1 outline-none"
              />
            </div>

            {/* Dropdown */}
            {openDropdown && (
              <div className="absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg max-h-72 overflow-y-auto z-50">

                {filteredUsers.length === 0 && (
                  <p className="text-center text-gray-500 p-4">No matching users</p>
                )}

                {filteredUsers.map((user) => (
                  <div
                    key={user.uid}
                    onClick={() => toggleUser(user.uid)}
                    className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                  >
                    <img
                      src={user.profile || `https://ui-avatars.com/api/?name=${user.firstname}`}
                      className="w-10 h-10 rounded-full mr-3"
                    />

                    <div>
                      <p className="font-medium">
                        {user.firstname} {user.lastname}
                      </p>
                      <p className="text-sm text-gray-500">{user.email}</p>
                    </div>

                    {selectedUserIds.includes(user.uid) && (
                      <span className="ml-auto text-green-600 font-bold">✔</span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 flex justify-end gap-2">
            <button
              className="px-4 py-2 bg-gray-200 rounded-lg"
              onClick={() => setOpenShare(false)}
            >
              Cancel
            </button>

            <button
              className="px-4 py-2 bg-green-600 text-white rounded-lg"
              onClick={saveShare}
            >
              Share
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}
