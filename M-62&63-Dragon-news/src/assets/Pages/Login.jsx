import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {

const {user,loginUser} = useContext(AuthContext)
const navigate = useNavigate()


const location = useLocation()

const from = location?.state?.pathname || '/'
console.log(from)
// console.log(location)
const sigininuser = e => {
    e.preventDefault()
    const form = e.target 
    const email = form.email.value 
    const password = form.password.value 
    // console.log(email,password)
    loginUser(email,password)
    .then(res => {
     
        console.log(res)
 
       
     

    })
    .catch(e=> {
        console.log(e.message)
    })

}

useEffect(()=> {
  if(user){
    console.log(1)
    navigate(from,{replace:true})
  }
},[user,from])
// if(user){
//   navigate(from)
// }



    return (
        <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className='text-center'>
      <h2 className='text-xl font-bold'> Login</h2>
        </div>
            <form onSubmit={sigininuser} className="card-body w-96">
       
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input required type="email" placeholder="Your email " name='email' className="input input-bordered" />
              </div>
        
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input required type="text" name='password' placeholder="Your password" className="input input-bordered" />
                <label className="label ">
                  <Link to='/register' className="label-text-alt link link-hover">Forgot password?</Link>  or 
                  <Link  to='/register' className="label-text-alt link link-hover">Create account </Link> 
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default Login;