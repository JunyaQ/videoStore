import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from './userContext';

function Login() {
    const [formState, setFormState] = useState({
        email: '', 
        password: '',
    });

    const { setUser, user } = useUser();
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    
        fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formState),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Login failed');
            }
            return response.json();
        })
        .then(userData => {
            console.log("Authentication successful:", userData);
            setUser(userData);
            navigate(`/profile/${userData._id}`); 
        })
        .catch(error => {
            console.error('Error:', error);
            alert("Login failed. Please check your email and password.");
        });
    };
    return (
        <div className="flex-row justify-center mb-4">
            <div className="form">
                <div className="form-body">
                    <form onSubmit={handleFormSubmit}>
                        <div className='label'>
                            <label htmlFor="email"><b>Email:</b></label>
                            <input className="form-input" placeholder="Your email" name="email" type="email" value={formState.email} onChange={handleChange} />
                        </div>
                        <br/>
                        <div className='label'>
                            <label htmlFor="password"><b>Password:</b></label>
                            <input className="form-input" placeholder="******" name="password" type="password" value={formState.password} onChange={handleChange} />
                        </div>
                        <button className="loginBtn label" type="submit">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
