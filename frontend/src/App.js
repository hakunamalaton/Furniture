import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import OrderProcess from "./Component/OrderProcess/js/OrderProcess";
import PageProduct from "./Component/PageProduct/js/pageProduct";
import Mapbox from "./Component/Address/Js/Mapbox";
import Rating from "./Component/Rating/js/rating";
import ImportDesign from "./Component/ImportDesign/js/importDesign";
import Menu from "./Component/Menu/menu";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/import-design" component={ImportDesign} />
                    <Route exact path="/page-product" component={PageProduct} />
                    <Route exact path="/rating" component={Rating} />
                    <Route exact path="/order" component={OrderProcess} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/mapbox" component={Mapbox} />
                    <Route exact path="/homepage" component={HomePage} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/menu" component={Menu} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;