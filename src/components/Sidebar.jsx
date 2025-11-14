import { Link } from "react-router-dom";

export default function Sidebar({ open, toggleSidebar }) {
  return (
    <>
      {/* Overlay (for mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed lg:static z-50 top-0 left-0 h-full w-64 bg-base-100 shadow-lg transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <div className="p-4 border-b border-base-300 flex items-center justify-between">
          <h2 className="text-lg font-bold">Menu</h2>
          <button
            onClick={toggleSidebar}
            className="btn btn-sm btn-circle btn-ghost lg:hidden"
          >
            ✕
          </button>
        </div>
        <ul className="menu p-4 text-base-content">
          <li><Link to="/" onClick={toggleSidebar}>🏠 Home</Link></li>
          <li><Link to="/dashboard" onClick={toggleSidebar}>📊 Dashboard</Link></li>
          <li><Link to="/about" onClick={toggleSidebar}>ℹ️ About</Link></li>
        </ul>
      </aside>
    </>
  );
}
