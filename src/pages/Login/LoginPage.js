import React, { useState } from 'react';
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

    <form action="/action_page.php">

      <div className="container mt-3">
        <button className="btn btn-outline-primary btn-sm" onClick={() => i18n.changeLanguage("es")}>ES</button>
        <button className='btn btn-outline-primary btn-sm' onClick={() => i18n.changeLanguage("en")}>EN</button>
      </div>

      <div className="container mt-3">
        {t("header.hello-world")}
        {showErrorMessage && (
          <div className="successMessage">
            {t("header.AutMessage")}
          </div>
        )}
      </div>

      <div className="mb-3 mt-3">
        <label className="form-label">{t("header.UserNameText")}</label>
        <input
          className="form-control"
          type="text"
          name="username"
          value={userName}
          onChange={handleUserNameChange}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">{t("header.PasswordText")}</label>
        <input
          className="form-control"
          type="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>

      <div className='form-check mb-3'>
          <label className='form-check-label'>
            <input class="form-check-input" type="checkbox"></input> Remembrer me
          </label>
      </div>

      <button className="btn btn-primary" type="button" name="Login" onClick={handleOnClickLogin}>
        {t("header.LoginText")}
      </button>
    </form>
  )
};

export default LoginPage;


