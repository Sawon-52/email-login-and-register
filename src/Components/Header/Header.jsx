import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("user logged out Successfully");
      })
      .catch((error) => console.error(error));
  };
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-indigo-700 rounded-lg px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100  rounded-box w-52 ">
              {links}
            </ul>
          </div>
          <a className="text-2xl font-bold text-gray-200">Email/Login</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">{links}</ul>
        </div>
        <div className="navbar-end hidden lg:flex gap-5">
          {user ? (
            <>
              <span>{user.displayName}</span>
              <button onClick={handleLogOut} className="text-red-500 font-bold bg-white p-2 rounded-md">
                Sign out
              </button>
            </>
          ) : (
            <Link to="/login">
              <button className="text-green-500 font-bold bg-white p-2 rounded-md">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
