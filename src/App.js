import React, { useState, useEffect } from 'react'
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
    if (holdBtnDown && holdBtnTimer < 5) {
      const timer = setInterval(() => {
        setHoldBtnTimer(holdBtnTimer + 1);
      }, 1000)
      return () => clearInterval(timer)
    }
  });

  useEffect(() => {
    if (holdBtnTimer === 5) {
      setPage(2);
      setHoldBtnDown(false);
      setHoldBtnTimer(0);
    }
  }, [holdBtnTimer])
  //timer code

  const progressStyle = {
    width: holdBtnTimer * 20 + '%'
  }

  return (
    <div className="App">
      {page === 0 ?
        <>
          <Logo />
          <Login
            form={loginState}
            logInTab={() => setLoginState(true)}
            signUpTab={() => setLoginState(false)}
            continueNextPage={() => setPage(1)}
            handleChangeTab={loginState}
          />
        </>
        :
        page === 1 ?
          <>
            <Logo />
            <Timer
              handleMouseDown={() => { setHoldBtnDown(true) }}
              handleMouseUp={() => { setHoldBtnDown(false); setHoldBtnTimer(0) }}
              holdBtnTime={holdBtnTimer}
              handleStyle={progressStyle}
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
