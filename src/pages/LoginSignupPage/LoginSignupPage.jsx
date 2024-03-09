import React, { useState } from 'react';
import Login from '../../components/Login';
import Signup from '../../components/Signup';
import './LoginSignupPage.css';


function LoginSignupPage() {
  const [account, setAccount] = useState(true); 

  return (
    <div className="flex-row justify-center mb-4">
      <div>
        <div className="form">
          <div className="form-header">
            {account ? <h4>Login</h4> : <h4>Sign Up</h4>}
          </div>
          <div className="form-body">
            <div className="form-container">
              {account ? <Login /> : <Signup />}
              <br />
              {account ? (
                <span className='switchline'>Don't have an Account? <a className ="switch" onClick={() => setAccount(false)}>Sign up</a></span>
              ) : (
                <span className='switchline'>Already have an account? <a className ="switch" onClick={() => setAccount(true)}>Login</a></span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginSignupPage;
