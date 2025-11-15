import { NavLink, Link } from "react-router-dom";
import { Menu } from "lucide-react";

export default function Navbar({ onMenuClick }) {
  const linkClasses =
    "px-3 py-2 rounded-md font-medium transition hover:text-primary hover:bg-base-200";

  const activeClasses =
    "text-primary font-semibold bg-base-200 shadow-sm";

  return (
    <div className="navbar bg-base-100/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      {/* Left Section - Menu Button on Mobile */}
      <div className="flex-none lg:hidden">
        <button
          onClick={onMenuClick}
          className="btn btn-ghost btn-square"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Logo */}
      <div className="flex-1">
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
        >
          Review App
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="flex-none hidden lg:block">
        <ul className="menu menu-horizontal px-1 gap-2">
          <li>
            <NavLink
              to="/home/allmovies"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              All Movies
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/myreviews"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              My Reviews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/sharedwithme"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              Shared With Me
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/allreviews"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              All Reviews
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/home/profile"
              className={({ isActive }) =>
                isActive ? activeClasses : linkClasses
              }
            >
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
