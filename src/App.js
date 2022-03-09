import { Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Rating from "./Rating/js/rating";
import PopUpRating from "./Rating/js/pop_up_rating";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Rating} ></Route>
                    <Route exact path="/pop-up-rating" component={PopUpRating} ></Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
