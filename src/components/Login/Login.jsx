import React, { useState, useEffect } from 'react';
import './Login.css';

const Login = (props) => {
  
  const [isLoginMode, setLoginMode] = useState(true);
  const [isLoginActive, setLoginActive] = useState(true);
  const [error, setError] = useState('');

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      props.setLoginComponentVisible(false);
    }
  };

  const handleFormLogin = async (event) => {
    event.preventDefault();

    const email = document.getElementById('email1').value;
    const password = document.getElementById('password1').value;

    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        // Logowanie udane, możesz dodać dodatkowe obsługi po udanym zalogowaniu
        console.log('Logowanie udane:', data);
      } else {
        // Obsługa błędu logowania
        console.error('Błąd logowania:', data.error || 'Wystąpił błąd podczas logowania.');
      }

    } catch (error) {
      console.error('Wystąpił błąd podczas logowania:', error);
    }
  };

  const handleFormRegister = async (event) => {
    event.preventDefault();

    const firstname = document.getElementById('username1').value;
    const lastname = document.getElementById('username2').value;
    const email = document.getElementById('email2').value;
    const password = document.getElementById('password2').value;
    

    try {
      const response = await fetch('http://localhost:3001/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          firstName: firstname,
          lastName: lastname,
        }),
      });

      const data = await response.json();

      if (data.ok) {
        // Rejestracja udana, możesz dodać dodatkowe obsługi po udanej rejestracji
        console.log('Rejestracja udana:', data);
      } else {
        setError(data.error || 'Wystąpił błąd podczas rejestracji.');
      }

    } catch (error) {
      console.error('Wystąpił błąd podczas rejestracji:', error);
    }
  };
  if (isLoginActive) {
    return (
      <div className='login-calosc' onClick={handleOverlayClick}>
      <div className='login-background'>
          <img className='login-headicon' src="zdj/user-2.png" alt="" />
      <form onSubmit={handleFormLogin}>

          <div class="login-group">
          <label for="email1"><img className='login-icon' src="zdj/icons8-person-64.png" alt="a" /></label>
          <input type="email" id="email1" name="username" placeholder="Login"></input>
          </div>
       
          <div class="login-group">
          <label for="password1"><img className='login-icon' src="zdj/icons8-password-50.png" alt="b" /></label>
          <input type="password" id="password1" name="username" placeholder="Hasło"></input>
          </div>
       <br />
        <div className='login-checkbox'>
          <input  type="checkbox" id="checkbox1" name="username" ></input>
          <label  for="checkbox1">Zapamiętaj mnie:</label>
        <a className='login-a' href="">Zapomniałeś hasła</a>
        </div>
        
        <button type="button" id='register1' onClick={()=> setLoginActive(false)}>Zarejestruj się</button>
        <button type="submit" id='submit1'>Zaloguj się</button>
        
      </form>
      </div>
      </div>
    );
  }else{
    return (
      <div className='login-calosc' onClick={handleOverlayClick}>
      <div className='login-background'>
          <img className='login-headicon' src="zdj/personal-data.png" alt="" />
      <form onSubmit={handleFormRegister}>

          <input type="text" name="firstname" id="username1" placeholder="Imie"></input>

          <input type="text" name="lastname" id="username2" placeholder="Nazwisko"></input>

          <input type="email" id="email2" name="username" placeholder="E-mail"></input>
      
          <input type="password" id="password2" name="username" placeholder="Hasło"></input>

          <input type="password" id="password3" name="username" placeholder="Powtórz hasło"></input>
          
       <br />
        
        <div className='obsluga'>
        <button type="submit" id='register2' >Zarejestruj się</button>
        <button type="button" id='login2' onClick={()=> setLoginActive(true)}>Masz konto ? Zaloguj się</button>
        </div>
        
      </form>
      </div>
      </div>
    );
  }
};
export default Login;