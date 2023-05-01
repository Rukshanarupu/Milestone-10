import React from 'react';


const RightSidebar = () => {
    return (
        <div>
            <h2 className='text-center'>Right sidebar</h2>
            <div>
                <button className='btn block mt-1 w-full'>  Login with Google</button>
                <button className='btn block mt-1 w-full'>Login with Github</button>
            </div>
        </div>
    );
};

export default RightSidebar;