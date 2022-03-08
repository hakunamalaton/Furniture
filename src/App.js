import { Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Address/Js/Address";
import Rating from "./Rating/js/rating";

function App() {
    return (
        <div className="App">
            <NavLink to="/address">App</NavLink>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/rating" component={Rating} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
