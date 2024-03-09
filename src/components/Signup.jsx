import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Signup () {
        const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        });

        // update state based on form input changes
        const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
        ...formState,
        [name]: value,
        });
        };

        // submit form
        const handleFormSubmit = () => {
        alert("User sign up with: First name: "+ formState.firstName + "  Last name: "+ formState.lastName
        + "  Email Address" +formState.email + "  Password: "+ formState.password);

        };

        return (
        <div className="flex-row justify-center mb-4">
        <div>
        <div className="form">
        <div className="form-body">
        <div className="form-container">
        <form onSubmit={handleFormSubmit}>
        <div className='label'>
        <label for="firstName"><b>Enter your first Name:</b></label>
        <input
        className="form-input"
        placeholder="Your first name"
        name="firstName"
        type="firstName"
        id="firstName"
        value={formState.firstName}
        onChange={handleChange}
        required
        />
        </div>

        <div className='label'>
        <label for="lastName"><b>Enter your last Name:</b></label>
        <input className="form-input" placeholder="Your last name"  name="lastName"  type="lastName" 
        value={formState.lastName}
        onChange={handleChange}
        required
        />
        </div>

        <div className='label'>
        <label for="email"><b>Enter your Email:</b></label>
        <input className="form-input"  placeholder="Your email" name="email" type="email" 
        value={formState.email}
        onChange={handleChange}
        required
        />
        </div>

        <div className='label'>
        <label for="password"><b>Enter your password:</b></label>
        <input className="form-input"  placeholder="******" name="password" type="password" 
        value={formState.password}
        onChange={handleChange}
        required
        />
        </div>
        <button className="loginBtn label" type="submit"> Sign Up </button>
        </form>

        </div>
        </div>
        </div>
        </div>
        </div>
        );
        };

export default Signup;