import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import Address from "./Component/Address/Js/Address";
import PageProduct from "./Component/PageProduct/js/pageProduct"
import ImportDesign from "./Component/ImportDesign/js/importDesign";

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/import-design" component={ImportDesign}/>
                    <Route exact path="/page-product" component={PageProduct} />
                    <Route exact path="/address" component={Address} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
