import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { GetAuthorizationAction } from '../../app/store/authorization/authorizationAction';


export const LoginPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation("global");
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

  const handleOnClickLogin = () =>
    GetAuthorizationAction(userName, password, dispatch)
      ? navigate('/home') : setShowErrorMessage(true);
  

  return (
    

    <div className="Login">
    <button onClick={()=> i18n.changeLanguage("es")}>ES</button>
    <button onClick={()=> i18n.changeLanguage("en")}>EN</button>
    <br/>
    {t("header.hello-world")}
    {showErrorMessage && (
      <div className="successMessage">
        {t("header.AutMessage")}
      </div>
    )}
    <div className="LoginForm">
      <div>
      {t("header.UserNameText")}
        <input
          type="text"
          name="username"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>
      <div>
      {t("header.PasswordText")}
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <div>
        <button type="button" name="Login" onClick={handleOnClickLogin}>
        {t("header.LoginText")}
        </button>
      </div>
    </div>
  </div>
  )
};

export default LoginPage;


