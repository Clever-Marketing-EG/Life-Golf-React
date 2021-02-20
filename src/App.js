import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Contact">
            <ContactUs />
          </Route>
          <Route exact path="/Products">
            <Products />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
