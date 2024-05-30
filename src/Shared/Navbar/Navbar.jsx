import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import '../../../src//Shared/Navbar/Navbar.css'

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch(error => {
        console.error(error);
      });
  };

  const navLinks = (
    <ul className="menu menu-horizontal px-1 uppercase italic">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/about'>About</Link></li>
      <li><Link to='/services'>Services</Link></li>
      <li><Link to='/blog'>Blog</Link></li>
      <li><Link to='/contact'>Contact</Link></li>
      {user?.email ? (
        <>
          <li><Link to='/bookings'>My Bookings</Link></li>
          <li><button onClick={handleLogOut} className="uppercase">Log out</button></li>
        </>
      ) : (
        <li><Link to='/login'>Login</Link></li>
      )}
    </ul>
  );

  return (
    <div className="navbar bg-base-100 h-28 mb-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        {navLinks}
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-warning hover:bg-yellow-500 hover:text-gray-900 transition duration-300"><Link to='/appoinment'>Appointment</Link></button>
      </div>
    </div>
  );
};

export default Navbar;
