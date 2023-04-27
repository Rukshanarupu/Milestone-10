import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';


const Home = () => {
    const user= useContext(AuthContext)
    return (
        <div className='container'>
            <h3 className='mt-4 text-center text-green-500 text-4xl'>This is home</h3>
        </div>
    );
};

export default Home;