import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";
import Show from "./components/Show";

function App() {
    return (
        <Router>
            <Switch>
                {/* <Route exact path="/" component={LandingPage} /> */}
                <Route exact path="/" component={Show} />
                <Route path="/menu" component={MenuPage} />
            </Switch>
        </Router>
    );
}

export default App;
