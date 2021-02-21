import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search" exact component={SearchPage} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
