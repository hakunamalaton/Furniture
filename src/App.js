import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import Mapbox from "./Component/Address/Js/Mapbox";
import Rating from "./Component/Rating/js/rating";
import ImportDesign from "./Component/ImportDesign/js/importDesign";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/import-design" component={ImportDesign} />
                    <Route exact path="/rating" component={Rating} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/mapbox" component={Mapbox} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
