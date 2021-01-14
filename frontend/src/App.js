import './App.css';
import HomePage from "./components/homePage";
import Shortcuts from "./components/shortcuts";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Shortcuts />
      <Nav />
      <HomePage />

    </div>
  );
}

export default App;
