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
import TransactionHistory from "./Component/TransactionHistory/js/transactionHistory";
import Login from "./Component/Account/Login";
import FakeLogin from "./Component/Account/FakeLogin";
import FakeRegister from "./Component/Account/FakeRegister";
import Register from "./Component/Account/Register";
import LoginRoute from "./Component/auth/LoginRoute";
import ExchangePolicy from "./Component/Policy/ExchangePolicy";
import Privacy from "./Component/Policy/Privacy";
import DeliveryPolicy from "./Component/Policy/DeliveryPolicy";
import TermOfService from "./Component/Policy/TermOfService";
import WarrantyPolicy from "./Component/Policy/WarrantyPolicy";
import QrCode from "./Component/qrcode/qrcode";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function App() {
    const history = useHistory();
    const accountState = useSelector(state => state.account);

    return (
        <Router>
            <div className="App">
                <QrCode />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/import-design" component={ImportDesign} />
                    <Route exact path="/product-detail/:id" component={PageProduct} />
                    <Route exact path="/rating" component={Rating} />
                    <Route exact path="/order" component={OrderProcess} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/mapbox" component={Mapbox} />
                    <Route exact path="/address" component={Address} />
                    <Route exact path="/menu" component={Menu} />
                    <Route exact path="/transaction-history" component={TransactionHistory} />
                    <Route exact path="/exchange-policy" component={ExchangePolicy} />
                    <Route exact path="/privacy-policy" component={Privacy} />
                    <Route exact path="/delivery-policy" component={DeliveryPolicy} />
                    <Route exact path="/warranty-policy" component={WarrantyPolicy} />
                    <Route exact path="/term-of-service" component={TermOfService} />
                    <Route exact path="/login" component={FakeLogin} />
                    <Route exact path="/register" component={FakeRegister} />
                    {/* <LoginRoute exact path="/login" component={Login} />
                    <LoginRoute exact path="/register" component={Register} /> */}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
