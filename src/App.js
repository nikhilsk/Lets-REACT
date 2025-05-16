import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
// import Show from "./components/Show";
// import Sample from "./components/Sample";
function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                {/* <Route exact path="/" component={Show} /> */}
                <Route path="/menu" component={MenuPage} />
                {/* YOUR TASK  */}
                {/* <Route path="/order" component={OrderPage} />
                <Route path="/bill" component={BillPage} />
                <Route path="/reviews" component={ReviewPage} /> */}
            </Switch>
        </Router>
    );
}

export default App;
