import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = (props) => {
  
  const [isLoginMode, setLoginMode] = useState(true);
  const [isLoginActive, setLoginActive] = useState(true);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      props.setLoginComponentVisible(false);
    }
  };
  if (isLoginActive) {
    return (
      <div className='login-calosc' onClick={handleOverlayClick}>
      <div className='login-background'>
          <img className='login-headicon' src="zdj/user-2.png" alt="" />
      <form onSubmit={handleFormSubmit}>
          <div class="login-group">
          <label className='login-label-icon' for="username"><img className='login-icon' src="zdj/icons8-person-64.png" alt="a" /></label>
          <input className='login-input' type="e-mail" id="username" name="username" placeholder="Login"></input>
          </div>
       
          <div class="login-group">
          <label className='login-label-icon' for="username"><img className='login-icon' src="zdj/icons8-password-50.png" alt="b" /></label>
          <input className='login-input' type="password" id="username" name="username" placeholder="Hasło"></input>
          </div>
       <br />
        <div className='login-radio'>
        <div class="login-group">
          <input type="radio" id="username" name="username" ></input>
          <label for="username">Zapamiętaj mnie:</label>
          </div>
        <a className='login-a' href="">Zapomniałeś hasła</a>
        </div>
        
        <button className='login-zaloguj' type="button" onClick={()=> setLoginActive(false)}>Zarejestruj się</button>
        <button className='login-zaloguj' type="submit">Zaloguj się</button>
        
      </form>
      </div>
      </div>
    );
  }else{
    return (
      <div className='login-calosc' onClick={handleOverlayClick}>
      <div className='login-background'>
        </div>
      </div>
    );
  }

  
};

export default Login;