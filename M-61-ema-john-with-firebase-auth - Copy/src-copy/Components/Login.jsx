
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

// const auth = getAuth(app);

const Login = () => {
    const {user, signInUser, googleSign}= useContext(AuthContext)
    const handleLogin=event=>{
        event.preventDefault()
        const email=event.target.email.value
        const password=event.target.password.value
        console.log(email, password)

        signInUser(email, password)
        .then((result) => {
            const loggedUser= result.user;
            console.log(loggedUser)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });

        // setError()

    }

    const handleGoogleSignIn=()=>{
        googleSign()
        .then((result) => {
            const loggedUser= result.user;
            console.log(loggedUser)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }

    return (
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            {/* <div>
                                <p><small>New in Auth Master? Please <Link className='link link-hover' to="/register">Register</Link></small></p>
                                <p className='text-danger'>error</p>
                                <p className='text-success'>success</p>
                            </div> */}
                        </form>
                        <div className="mt-2">
                            <button onClick={handleGoogleSignIn} className="btn btn-secondary">Google</button>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Login;