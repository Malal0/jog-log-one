import React, { useState } from 'react'
import logoImg from './images/running-man.svg';
import Logo from './components/LogoElement';
import Login from './components/Login';
import AdSpace from './components/AdSpace';
import Timer from './components/Timer';
import Records from './components/Records';
import './App.css';

function App() {
  const [page, setPage] = useState(0); //for now i want 3 pages... 0,1,2
  const [loginState, setLoginState] = useState(true); //the state of the login form

  return (
    <div className="App">
      <img src={logoImg} alt="Running Man" />
      {page === 0 ?
        <>
          <Login
            form={loginState}
            logInTab={() => setLoginState(true)}
            signUpTab={() => setLoginState(false)}
            continueNextPage={() => setPage(1)}
          />
          <Logo />
        </>
        :
        page === 1 ?
          <>
            <Logo />
            <Timer />
            <Records />
          </>
          :
          <>
            <Logo />
            <Timer />
          </>
      }
      <AdSpace />
    </div >
  );
}

export default App;
