import React, { useState, useRef, useContext} from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Link } from 'react-router-dom';

const Register = () => {
    const {createUser}= useContext(AuthContext)
    console.log(createUser)

    // Set date of birth 
    const [date, setDate] = useState('');
    const dateInputRef = useRef(null);
    const handleDate = (e) => {
        setDate(e.target.value);
    };

    const [error, setError] = useState('');
    const handleRegister=event=>{
        console.log(event)
        event.preventDefault()
        const name=event.target.name.value
        const email=event.target.email.value
        const password=event.target.password.value
        console.log(name, email, password)

        createUser(email, password)
        .then((result) => {
            const loggedUser= result.user;
            console.log(loggedUser)
          })
          .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
          });

        setError()

    }
    return (
        
        <div className='container mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-lg shadow-5xl bg-base-100 rounded">
                        <form onSubmit={handleRegister} className="card-body p-0">
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" required/>
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Email" className="input input-bordered" required/>
                            </div>
                            <div className="form-control border-0">
                                <label className="label">
                                    <span className="label-text">Date of Birth</span>
                                </label>
                                <input type="date" name='date' onChange={handleDate} ref={dateInputRef} className="input input-bordered" required/>
                            </div>
                            <div className="form-control border-0">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Password" className="input input-bordered" required/>
                            <label className="label">
                                <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                            </label>
                            </div>
                            <div className="form-control border-0">
                                <button className="btn btn-primary">Register</button>
                                <p className='text-danger'>{error}</p>
                                <p className='text-success'>success</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
        </div>    );
};

export default Register;