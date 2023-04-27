import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Header = () => {
    const {user, logOut}=useContext(AuthContext)

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>console.log(error.message))
    }
    return (
        <div className=" bg-neutral text-neutral-content">
            <div className='navbar container'>
                <div className="">
                    <a className="btn normal-case text-xl">Auth Master</a>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black">
                            <li className='mx-1'><Link to="/">Home</Link></li>
                            <li className='mx-1'><Link to="/login">Login</Link></li>
                            <li className='mx-1'><Link to="/register">Register</Link></li>
                            <li className='mx-1'><Link to="/orders">Orders</Link></li>
                            {user && <li className='mx-1'><Link to="/profile">Profile</Link></li>}
                        </ul>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='mx-1'><Link to="/">Home</Link></li>
                        <li className='mx-1'><Link to="/login">Login</Link></li>
                        <li className='mx-1'><Link to="/register">Register</Link></li>
                        <li className='mx-1'><Link to="/orders">Orders</Link></li>
                        {user && <li className='mx-1'><Link to="/profile">Profile</Link></li>}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? 
                        <p>
                            <span>{user.email}</span> 
                            <a onClick={handleLogOut} className="btn btn-accent text-neutral-content">Sign Out</a>
                        </p> : 
                        <Link to='/login' className="btn btn-accent text-neutral-content">Login</Link>
                    }
                    
                </div>
            </div>
        </div>
    );
};

export default Header;