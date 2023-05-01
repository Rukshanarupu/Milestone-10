import React, { useContext, useState } from 'react';
import AuthProvider, { AuthContext } from '../components/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { Link, useLocation } from 'react-router-dom';

const Register = () => {

const {user} = useContext(AuthContext)
  const { createUser } = useContext(AuthContext)
const location = useLocation()
const [accepted,setAccepted] = useState(false)
const handleAccepted = e => {
  setAccepted(e.target.checked)
}
console.log(location)
  const signUpUser = (e) => {
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const name = form.name.value
    const photo = form.photo.value || 'https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
    const password = form.password.value


    console.log(email, password)
    createUser(email,password)
    .then(res=> {
    console.log('account created')
    console.log(res.user)
    updateProfile(res.user,{
      displayName : name,
      photoURL : photo
    })

    })
    .catch(e=> {
      console.log(e.message)
    })

  }
  if(user){
    navigate(from)
}
  return (
    <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className='text-center'>
            <h2 className='text-xl font-bold'> Create new Accont</h2>
          </div>
          <form onSubmit={signUpUser} className="card-body w-96">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name </span>
              </label>
              <input required type="text" placeholder="Your full name " name='name' className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input required type="text" name='email' placeholder="Your email " className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo </span>
              </label>
              <input type="text" name='photo' placeholder="Photo URL " className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input required type="text" name='password' placeholder="Your password" className="input input-bordered" />
              <label className="label">
                <Link to='/login' className="label-text-alt link link-hover">You have a account ? </Link>
              </label>
            </div>
            <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Accept TAC </span>
    <input onChange={handleAccepted} type="checkbox" required className="checkbox checkbox-accent" />
  </label>
</div>
            <div className="form-control mt-6">
              <button disabled={!accepted} className="btn btn-primary">Create Account</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;