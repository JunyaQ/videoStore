    import React, { useState } from 'react';
    import { Link } from 'react-router-dom';

    function Login (){
    const [formState, setFormState] = useState({ 
    email: '', 
    password: '' ,
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
    const handleFormSubmit =()=> {
    // console.log("Submit a User login, logged in")
    alert("User: "+ formState.email+ "Log ii with password: "+ formState.password);
    };
    return (
    <div className="flex-row justify-center mb-4">
    <div>
    <div className="form">
      <div className="form-body">
        <div className="form-container">
    <form onSubmit={handleFormSubmit}>
    <div className='label'>
    <label htmlFor="email" className='label'><b>Email:</b></label>
    <input className="form-input" placeholder="Your email"  name="email"   type="email" id="email"
    value={formState.email}
    onChange={handleChange}
    />
    </div>
    <br/>
    <div className='label'>
    <label htmlFor="password"><b>Password:</b></label>
    <input className="form-input" placeholder="******"  name="password"  type="password"  id="password"
    value={formState.password}
    onChange={handleChange}
    />
    </div>
    <button className="loginBtn label" type="submit">
    Login
    </button>
    </form>
    </div>

      </div>
    </div>
    </div>
    </div>
    );
    };

    export default Login;