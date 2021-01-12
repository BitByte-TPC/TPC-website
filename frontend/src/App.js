import './App.css';
import Main from "./components/mainSection";
import Nav from "./components/nav";
import Shortcuts from "./components/shortcuts";
import SvgBackground from './components/svgbackground';
import MobileNav from "./components/mobileNav";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header> */}
      <Shortcuts />
      <MobileNav />
      <Main />
      <Nav />
      <SvgBackground />

    </div>
  );
}

export default App;
