import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs"
import AboutUs from './components/AboutUs/AboutUs';
function App() {

    return (
        <div>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/About">
                        <AboutUs />
                    </Route>
                    <Route exact path="/Contact">
                        <ContactUs />
                    </Route>
                </Switch>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
