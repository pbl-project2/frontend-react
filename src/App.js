import "./App.css";
import Login from "./Components/Login.jsx";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Admin from "./Components/Admin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login}/>
          <Route path="/display" exact component={Admin}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
