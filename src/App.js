import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Rating from "./Rating/js/rating";
import Menu from "./Component/Menu/menu";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/homepage" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/rating" component={Rating} />
                    <Route exact path="/menu" component={Menu} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
