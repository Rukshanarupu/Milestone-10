import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../components/AuthProvider';




const Dashboard = () => {

    const {user } = useContext(AuthContext)
    return (
        <div className='flex justify-between'>
           <div className='text-center'>
           <h2 className='text-xl font-bold text-green-500'>Your info : </h2>
           <h3>Name : {user.displayName}</h3>
           <h3>Email : {user.email}</h3>

           </div>


            <div className='text-center'>
            <div className="hero ">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <div className='text-center'>
            <h2 className='text-xl font-bold'>update Your info :  </h2>
          </div>
          <form  className="card-body w-96">
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Update </button>
            </div>
          </form>
        </div>
      </div>
    </div>
            </div>
        </div>
    );
};

export default Dashboard;