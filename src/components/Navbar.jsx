import { Link } from "react-router-dom";

export default function Navbar({ onMenuClick }) {
  return (
      <div className="navbar bg-base-100 shadow-md">
          <div className="flex-none">
              <button
                  onClick={onMenuClick}
                  className="btn btn-square btn-ghost lg:hidden">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-6 h-6 stroke-current">
                      <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                      />
                  </svg>
              </button>
          </div>
          <div className="flex-1">
              <Link
                  to="/"
                  className="text-xl font-bold text-primary">
                  Review App
              </Link>
          </div>
          <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal px-1">
                  <li>
                      <Link to="allmovies">All Movies</Link>
                  </li>
                  <li>
                      <Link to="myreviews">My Reviews</Link>
                  </li>
                  <li>
                      <Link to="sharedwithme">Shared With Me</Link>
                  </li>

                  <li>
                      <Link to="allreviews">All Reviews</Link>
                  </li>
                  <li>
                      <Link to="profile">Profile</Link>
                  </li>
              </ul>
          </div>
      </div>
  );
}


