import logoImg from './images/running-man.svg';
import Logo from './components/LogoElement';
import Login from './components/Login';
import AdSpace from './components/AdSpace';
import Timer from './components/Timer';
import Records from './components/Records';
import './App.css';

function App() {
  return (
    <div className="App">
      <img src={logoImg} alt="Running Man" />
      <Logo />
      <Login />
      <AdSpace />
      <Timer />
      <Records />
    </div >
  );
}

export default App;
