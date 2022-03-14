import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Rating from "./Component/Rating/js/rating";
import PopUpRating from "./Component/Rating/js/popUpRating";
import ImportDesign from "./Component/ImportDesign/js/importDesign";
function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Rating}
                    ></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
