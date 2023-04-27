import React, { useContext, useState } from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const SignUp = () => {
    const {createUser}=useContext(AuthContext)
    const [error, setError]=useState('')
    // const {googleSign}=useContext(AuthContext)

    const handleSignUp=event=>{
        event.preventDefault()

        const form=event.target
        const name=form.name.value
        const email=form.email.value
        const password=form.password.value
        const confirmPassword=form.confirmPassword.value
        console.log(email, password, confirmPassword)

        setError('')
        if(password !== confirmPassword){
            setError('Password does not same')
            return
        }   
        else if(password.length < 6){
            setError('Password must be 6 characters or more')
            return
        }

        createUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
        })
        .catch((error) => {
            const errorMessage = error.message;
            console.log(errorMessage)
        });
    }

    // const handleSignUpWithGoogle=()=>{

    // }
    return (
        <section className='login-section'>
            <div className='login-form'>
                <h3>Sign Up</h3>
                <form onSubmit={handleSignUp}>
                    <div className='login-input'>
                        <label for="">Name</label> 
                        <input type="text" name="name" placeholder="Your Name" required/>
                    </div>
                    <div className='login-input'>
                        <label for="">Email</label> 
                        <input type="text" name="email" placeholder="Your Email" required/>
                    </div>
                    <div className='login-input'>
                        <label for="">Password</label> 
                        <input type="password" name="password" placeholder="Your Password" required/>
                    </div>            
                    <div className='login-input'>
                        <label for="">Confirm Password</label>
                        <input type="password" name="confirmPassword" placeholder="Your Password" required/>
                    </div>            
                    <input className='login-btn' type="submit" value="Sign Up"/>
                    <p>Already have an account? Please <Link to='/login' className='new-user'><span>Log In</span></Link></p>
                </form>
                <div className='google-login'>
                    <p>Or</p>
                    <button className='google-btn'>Continue with google</button>
                </div>
                <div>
                    <p className='error-txt'>{error}</p>
                </div>
            </div>
        </section>
    );
};

export default SignUp;