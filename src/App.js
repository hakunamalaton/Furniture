import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Rating from "./Component/Rating/js/rating";
import PopUpRating from "./Component/Rating/js/popUpRating";
import ImportDesign from "./Component/ImportDesign/js/importDesign";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={ImportDesign}></Route>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
