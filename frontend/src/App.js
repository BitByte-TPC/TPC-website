import './App.css';
import Main from "./components/mainSection";
import Nav from "./components/nav";
import Shortcuts from "./components/shortcuts";

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
      <Main />
      <Nav />

<svg className="waveSvg" xmlns="http://www.w3.org/2000/svg" width="833" height="1079" viewBox="0 0 833 1079">
  <path id="Intersection_1" data-name="Intersection 1" d="M279.111,1207.79C322.137,1073.069,399.415,672.667,49.8,130.906V128.79H881.989l.811,24.761V1207.79Z" transform="translate(-49.8 -128.79)" fill="rgba(20,51,95,0.71)"/>
</svg>
<svg className="waveSvg2" xmlns="http://www.w3.org/2000/svg" width="833" height="1079" viewBox="0 0 833 1079">
  <path id="Intersection_1" data-name="Intersection 1" d="M279.111,1207.79C322.137,1073.069,399.415,672.667,49.8,130.906V128.79H881.989l.811,24.761V1207.79Z" transform="translate(-49.8 -128.79)" fill="rgba(20,51,95,0.71)"/>
</svg>

    </div>
  );
}

export default App;
