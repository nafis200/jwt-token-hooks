
// import { useContext } from "react";
// import { AuthContext } from "./Authprovider";
import { Link, NavLink, Navigate } from "react-router-dom";
import useAuth from "./useAuth";


const Navbar = () => {
    // const{users,logout} = useContext(AuthContext)

    const {users,logout} = useAuth()


    const handlelogout = () => {
      logout()
        .then(() => {
          Navigate('/login')
        })
        .catch((error) => {
          console.log("logout error meesage", error.message);
        });
    };
    const links = <>
    <li> <Link to ="/">Home</Link> </li>
    <li> <Link to="/registration">Sign Up</Link> </li>
    <li> <Link to="/bookings">My bookings</Link> </li>
    {
       users?.email ?<>
       <li> <button onClick={handlelogout}>Log out</button> </li>  </> :<li><NavLink to="/login">Login</NavLink></li>
    }

    
    </>
    return (
        <div className="navbar bg-base-100 h-28 mb-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Jwt</a>
        </div>
      </div>
    );
};

export default Navbar;