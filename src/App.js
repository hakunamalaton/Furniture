import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
