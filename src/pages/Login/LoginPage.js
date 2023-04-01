import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  // const { login } = useAuth();

  const handleUserNameChange = (event) => {
    resetFlagsMessages();
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    resetFlagsMessages();
    setPassword(event.target.value);
  };

  const resetFlagsMessages = () => {
    setShowErrorMessage(false);
  };

  const handleOnClickLogin = () => {

    if (userName === 'juan' && password === '123') {
      navigate('/home');
      // navigate(/welcome/${userName});
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="container mt-3">
      <h1  class="display-1">Login</h1>
      {showErrorMessage && (
        <div className="successMessage">
          Authenticated failed. Please check your credentials.
        </div>
      )}

      <form action="/action_page.php">
        <div>
          <div class="mb-3 mt-3">
            <label class="form-label" >User Name:</label>
            <input
              class="form-control"
              type="text"
              name="username"
              value={userName}
              onChange={handleUserNameChange}
            />
          </div>
          <div class="mb-3">
            <label>Password:</label>
            <input
              class="form-control"
              type="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div class="form-check mb-3">
            <label class="form-check-label">
              <input
                class="form-check-label"
                type="checkbox"
                name="remember"
              /> Remember me
            </label>
          </div>
          <div>
            <button className='btn btn-primary' type="button" name="Login" onClick={handleOnClickLogin}>
              Login
            </button>
          </div>
        </div>
      </form>

    </div>
  )
};

export default LoginPage;


