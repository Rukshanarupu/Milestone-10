import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className='text-blue-500 text-center font-bold text-3xl my-4'>This is Header</div>
            <div>
                <Link to="/" className='mx-2'>Home</Link>
                <Link to="/login">Login</Link>
            </div>
        </div>
    );
};

export default Header;