import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            {/* <div className='text-blue-500 text-center font-bold text-3xl my-4'>This is Header</div> */}
            <div className='menu'>
                <Link to="/" className='mx-2'>Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
                <Link to="/registerRBS">RegisterRBS</Link>
                <Link to="/registerBS">RegisterBS</Link>
            </div>
        </div>
    );
};

export default Header;