import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    const from ='/login'
    console.log(location)
    if(loading){
     return <progress className="progress w-56"></progress>
    }
   if(user){
return <>{children}</>
   }else{
   return  <Navigate to={from} state={location}></Navigate>
   }
};

export default PrivateRoute;