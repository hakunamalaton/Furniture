import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./Address/Js/HomePage";
import Address from "./Address/Js/Address";

function App() {
    return (
        <div className="App">
            <NavLink to="/address">App</NavLink>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
