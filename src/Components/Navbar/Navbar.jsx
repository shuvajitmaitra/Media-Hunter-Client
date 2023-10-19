import { Link, NavLink } from "react-router-dom";
import { RxVideo } from "react-icons/rx";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  console.log(user);

  const handleSignOut =()=>{
    logOut()
  }

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/addProduct"}>Add Product</NavLink>
      </li>
      <li>
      <NavLink to={"/addToCart"}>My Cart</NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full md:flex items-center   bg-[#f3aa60] fixed z-50">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case md:text-xl">
            <span className="text-[#EF6262]">
              <RxVideo />
            </span>{" "}
            Media <span className="text-[#EF6262]">Hunter</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{navLink}</ul>
        </div>
      </div>
      <div className="navbar-end w-full  md:max-w-max flex justify-center md:justify-end ">
        {user ? (
          <span className="flex items-center gap-3 py-3 font-medium ">
          <img src={user.photoURL} className="w-[60px] rounded-full" />
          <h3 className="w-full capitalize">{user.displayName}</h3>
          <Link
            to={"/login"}
            onClick={handleSignOut}
            className="btn btn-sm md:btn-md bg-[#1D5B79] text-white"
          >
            Sign Out
          </Link>
          </span>
        ) : (
          <>
            <Link
              to={"/login"}
              className="btn btn-sm md:btn-md bg-[#1D5B79] text-white"
            >
              Login
            </Link>
            <Link
              to={"/register"}
              className="btn btn-sm md:btn-md bg-[#EF6262] text-white"
            >
              Join Us
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
