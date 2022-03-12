import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Rating from "./Rating/js/rating";

function App() {
    return (
        <Router>
            <div className="App">
                <Link to="/address"> To </Link>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/rating" component={Rating} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
