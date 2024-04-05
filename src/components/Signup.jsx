import React, { useState } from 'react';

function Signup() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target; 
        setFormState(prevState => ({
            ...prevState,
            [name]: value 
        }));
    };

    // Submit form to the server
    const handleFormSubmit = (e) => {
        e.preventDefault(); 

   
        fetch('http://localhost:8080/users', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); 
        })
        .then(data => {
            console.log("Success:", data);
            alert("Signup successful!");
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Error signing up. Please try again.");
        });
    };

    return (
        <div className="flex-row justify-center mb-4">
            <div className="form">
                <div className="form-body">
                    <form onSubmit={handleFormSubmit}>
                        <div className='label'>
                            <label htmlFor="firstName"><b>Enter your first Name:</b></label>
                            <input
                                className="form-input"
                                placeholder="Your first name"
                                name="firstName"
                                type="text"
                                value={formState.firstName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='label'>
                            <label htmlFor="lastName"><b>Enter your last Name:</b></label>
                            <input
                                className="form-input"
                                placeholder="Your last name"
                                name="lastName"
                                type="text"
                                value={formState.lastName}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='label'>
                            <label htmlFor="email"><b>Enter your Email:</b></label>
                            <input
                                className="form-input"
                                placeholder="Your email"
                                name="email"
                                type="email"
                                value={formState.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='label'>
                            <label htmlFor="password"><b>Enter your password:</b></label>
                            <input
                                className="form-input"
                                placeholder="******"
                                name="password"
                                type="password"
                                value={formState.password}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <button className="loginBtn label" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Signup;
