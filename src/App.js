import React, { useState, useEffect } from 'react'
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

  // timer code
  const [holdBtnDown, setHoldBtnDown] = useState(false);
  const [holdBtnTimer, setHoldBtnTimer] = useState(0);

  useEffect(() => {
    if (holdBtnDown && holdBtnTimer < 15) {
      const timer = setInterval(() => {
        setHoldBtnTimer(holdBtnTimer + 1);
      }, 1000)
      return () => clearInterval(timer)
    }
  });
  //timer code

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
            <Timer
              handleMouseDown={() => { setHoldBtnDown(true) }}
              handleMouseUp={() => { setHoldBtnDown(false); setHoldBtnTimer(0) }}
              holdBtnTime={holdBtnTimer}
            />
            <Records />
          </>
          :
          <>
            <Logo />
            <button onClick={() => setPage(1)}>home</button>
            <Timer />
          </>
      }
      <AdSpace />
    </div >
  );
}

export default App;
