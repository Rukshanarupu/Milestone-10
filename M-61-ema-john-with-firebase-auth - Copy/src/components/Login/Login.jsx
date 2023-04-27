import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const [show, setShow]=useState(false)
    const {signInUser}=useContext(AuthContext)
    const [error, setError]=useState('')
    const navigate =useNavigate()
    const location = useLocation()
    // console.log(location)

    const from =location.state?.from?.pathname || '/'

    const handleLogin=event=>{
        event.preventDefault()
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email, password)

        signInUser(email, password)
        .then(result=>{
            const loggedUser = result.user
            console.log(loggedUser)
            form.reset();
            navigate(from, {replace: true})
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
            console.log(error)
        });
    }
    return (
        <section className='login-section'>
            <div className='login-form'>
                <h3>Login Now!</h3>
                <form onSubmit={handleLogin}>
                    <div className='login-input'>
                        <label for="">Email</label> 
                        <input type="text" name="email" placeholder="Your Email"/>
                    </div>
                    <div className='login-input'>
                        <label for="">Password</label> 
                        <input type={show ? "text" : "password"} name="password" placeholder="Your Password"/>
                        <p onClick={()=> setShow(!show)}><small>
                            {
                                show? <span>Hide password</span> : <span>Show password</span>
                            }
                        </small></p>
                    </div>            
                    <input className='login-btn' type="submit" value="LogIn"/>
                    <p>New in Ema John <Link to='/signup' className='new-user'><span>Create new Account</span></Link></p>
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

export default Login;