import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./Component/HomePage/HomePage";
import Address from "./Component/Address/Js/Address";
import OrderProcess from "./Component/OrderProcess/js/OrderProcess";
import PageProduct from "./Component/PageProduct/js/pageProduct";
import Mapbox from "./Component/Address/Js/Mapbox";
import Rating from "./Component/Rating/js/rating";
import ImportDesign from "./Component/ImportDesign/js/importDesign";
import Menu from "./Component/Menu/menu";
import TransactionHistory from "./Component/TransactionHistory/js/transactionHistory";
import FakeLogin from "./Component/Account/FakeLogin";
import FakeRegister from "./Component/Account/FakeRegister";
import ExchangePolicy from "./Component/Policy/ExchangePolicy";
import Privacy from "./Component/Policy/Privacy";
import DeliveryPolicy from "./Component/Policy/DeliveryPolicy";
import TermOfService from "./Component/Policy/TermOfService";
import WarrantyPolicy from "./Component/Policy/WarrantyPolicy";
import QrCode from "./Component/qrcode/qrcode";
import Blog1 from "./Component/HomePage/blog1";
import Blog2 from "./Component/HomePage/blog2";
import Blog3 from "./Component/HomePage/blog3";
import Blog4 from "./Component/HomePage/blog4";

import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import { initAccountWithCookies } from "./Component/Account/slice/accountSlice";

function App() {
    const dispatch = useDispatch();

    const [cookies, setCookies] = useCookies(['email', 'token']);

    useEffect(() => {
        if (cookies["token"] !== undefined) {
            dispatch(initAccountWithCookies(cookies));
        }
    }, []);



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
                    <Route exact path="/menu/:type" component={Menu} />
                    <Route exact path="/transaction-history" component={TransactionHistory} />
                    <Route exact path="/exchange-policy" component={ExchangePolicy} />
                    <Route exact path="/privacy-policy" component={Privacy} />
                    <Route exact path="/delivery-policy" component={DeliveryPolicy} />
                    <Route exact path="/warranty-policy" component={WarrantyPolicy} />
                    <Route exact path="/term-of-service" component={TermOfService} />
                    <Route exact path="/blogs/save-apartment-space-in-a-smart-way" component={Blog1} />
                    <Route exact path="/blogs/3-ideas-to-fill-in-the-gaps-in-your-room" component={Blog2} />
                    <Route exact path="/blogs/5-bedroom-models-that-bring-comfort-to-your-sleep" component={Blog3} />
                    <Route exact path="/blogs/decorate-the-living-room-for-the-new-season" component={Blog4} />
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
