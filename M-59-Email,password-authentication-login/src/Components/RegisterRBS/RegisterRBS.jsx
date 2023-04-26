import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

const RegisterRBS = () => {
    const handleSubmit=(event)=>{
        event.preventDefault()
        const password=event.target.password.value;
        const email=event.target.email.value;
        console.log(email, password)
    }
    return (
        <div className='w-50 mx-auto mt-5'>
            <h3 className='text-primary'>Please Register</h3>
            <Form onSubmit={handleSubmit} action="">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default RegisterRBS;