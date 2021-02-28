import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Product from './components/SingleProduct/SingleProduct';
import Maintenance from './components/Support/Maintenance/Maintenance';
import Terms from './components/Support/Terms/Terms';
import News from './components/News/News';
import Post from './components/News/Post/Post';
import Electronics from './components/Electronics/Electronics';
import Customize from './components/Electronics/Customize/Customize';
import Prod from './components/Products/Product/Product';
import Services from './components/Services/Services';
import Rental from './components/Services/Rental/Rental';
import Exchange from './components/Services/Exchange/Exchange';
import Spare from './components/Services/Spare/Spare';
import Payment from './components/Services/Payment/Payment';
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
          <Route exact path="/About">
            <AboutUs />
          </Route>
          <Route exact path="/Product">
            <Product />
          </Route>
          <Route exact path="/Terms">
            <Terms />
          </Route>
          <Route exact path="/Maintenance">
            <Maintenance />
          </Route>
          <Route exact path="/News">
            <News />
          </Route>
          <Route exact path="/Post">
            <Post />
          </Route>
          <Route exact path="/Electronics">
            <Electronics />
          </Route>
          <Route exact path="/Customize">
            <Customize />
          </Route>
          <Route exact path="/Prod">
            <Prod />
          </Route>
          <Route exact path="/Services">
            <Services />
          </Route>
          <Route exact path="/Rental">
            <Rental />
          </Route>
          <Route exact path="/Exchange">
            <Exchange />
          </Route>
          <Route exact path="/Spare">
            <Spare />
          </Route>
          <Route exact path="/Payment">
            <Payment />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
