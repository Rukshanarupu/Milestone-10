import React, { useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';

const Register = () => {
    const [error, setError]=useState('')
    const [success, setSuccess]=useState('')
    const auth = getAuth(app);
    const handleEmailChange=(event)=>{
        // console.log(event.target.value)
    }

    const handlePasswordBlur=(event)=>{
        // console.log(event.target.value)
    }

    const handleSubmit=(event)=>{
        event.preventDefault()
        setSuccess('')
        const password=event.target.password.value;
        const email=event.target.email.value;
        console.log(email, password)
        if(!/(?=.*[A-Z])/.test(password)) {
            setError('Please input at least one uppercase')
            return
        }
        if(!/(?=.*[0-9].*[0-9])/.test(password)) {
            setError('Please input at least two numbers')
            return
        }
        else if(!/(.{6})/.test(password)) {
            setError('Please ensure 6 characters are present')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            const user=result.user
            console.log(user)
            setError('')
            event.target.reset()
            setSuccess('You have been created successfully')
        })
        .catch((error)=>{
            console.log(error.message)
            setError(error.message)
        })
    }
    return (
        <div>
            <h4 className='mt-4'>Please Register</h4>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleEmailChange} type="email" name="email" id="email" placeholder='Your email'/> <br />
                <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='Your password' style={{margin:'10px 0px'}}/> <br />
                <input type="submit" value="Register" />
            </form>
            <p className='text-danger mt-3'>{error}</p>
            <p className='text-success mt-3'>{success}</p>

        </div>
    );
};

export default Register;