// components/common/ConfirmDelete.jsx
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from "@headlessui/react";

export default function ConfirmDelete({ open, onClose, onConfirm }) {
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogBackdrop className="fixed inset-0 bg-black/30" />
            <div className="fixed inset-0 flex items-center justify-center p-4">
                <DialogPanel className="bg-white w-full max-w-sm rounded-xl p-6 shadow-lg">
                    <DialogTitle className="text-lg font-semibold text-gray-800">
                        Delete Review?
                    </DialogTitle>

                    <p className="text-gray-600 mt-2">
                        This action cannot be undone. Are you sure?
                    </p>

                    <div className="mt-6 flex justify-end gap-3">
                        <button
                            onClick={onClose}
                            className="px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
                            Cancel
                        </button>

                        <button
                            onClick={onConfirm}
                            className="px-4 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">
                            Delete
                        </button>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>
    );
}
