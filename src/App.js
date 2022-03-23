import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Rating from "./Rating/js/rating";
import CurrentCart from "./Component/cart/CurrentCart";
import Login from "./Component/Account/Login";
import Register from "./Component/Account/Register";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/rating" component={Rating} />
                    <Route exact path="/cart" component={CurrentCart} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
