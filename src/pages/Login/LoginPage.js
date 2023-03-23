import React, {useState} from 'react';
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

    if (userName ==='juan' && password === '123') {
      navigate('/home');
      // navigate(/welcome/${userName});
    } else {
      setShowErrorMessage(true);
    }
  };

  return (
    <div className="Login">
    <h1>Login</h1>
    {showErrorMessage && (
      <div className="successMessage">
        Authenticated failed. Please check your credentials.
      </div>
    )}
    <div className="LoginForm">
      <div>
        <label>User Name:</label>
        <input
          type="text"
          name="username"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="button" name="Login" onClick={handleOnClickLogin}>
          Login
        </button>
      </div>
    </div>
  </div>
  )
};

export default LoginPage;


