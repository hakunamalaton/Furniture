import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Rating from "./Rating/js/rating";

function App() {
    return (
        <div className="App">
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
