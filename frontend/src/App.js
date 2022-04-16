import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import PageProduct from "./Component/PageProduct/js/pageProduct"
import Mapbox from "./Component/Address/Js/Mapbox";
import Rating from "./Component/Rating/js/rating";
import ImportDesign from "./Component/ImportDesign/js/importDesign";
import Login from "./Component/Account/Login";
import Register from "./Component/Account/Register";
import LoginRoute from "./Component/auth/LoginRoute";
function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/import-design" component={ImportDesign}/>
                    <Route exact path="/page-product" component={PageProduct} />
                    <Route exact path="/rating" component={Rating} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/mapbox" component={Mapbox} />
                    <LoginRoute exact path="/login" component={Login} />
                    <LoginRoute exact path="/register" component={Register} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;