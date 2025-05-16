import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import MenuPage from "./components/MenuPage";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/menu" component={MenuPage} />
            </Switch>
        </Router>
    );
}

export default App;
