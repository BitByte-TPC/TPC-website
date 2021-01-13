import './App.css';
import Main from "./components/mainSection";
import Nav from "./components/nav";
import Shortcuts from "./components/shortcuts";
import MobileNav from "./components/mobileNav";

function App() {
  return (
    <div className="App">
      <Shortcuts />
      <MobileNav />
      <Main />
      <Nav />

    </div>
  );
}

export default App;
