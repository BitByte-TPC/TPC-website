import { Route } from 'react-router-dom';
import './App.css';
import HomePage from "./components/homePage";
import Nav from "./components/nav";
import { Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
