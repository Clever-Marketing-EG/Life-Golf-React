import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';

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

const { BASE_URL } = require('./config');

function App() {
  const [meta, setMeta] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [articles, setArticles] = useState([]);
  const [languages, setLanguage] = useState("");
  const changelang = (e) => {
    let language = e.target.lang
    localStorage.setItem("lang", language)
    setLanguage(language)
  }
  useEffect(() => {
    let lang = localStorage.getItem("lang")              
    axios.get(`${BASE_URL}/meta`).then(response => {
      const dataObject = {};
      response.data.data.forEach((data) => {
        if (lang == "ar") {
          dataObject[data.name] = data.content_ar;
        } else {
          dataObject[data.name] = data.content;
        }
      });
      setMeta(dataObject);
      console.log(dataObject);
    });
    axios.get(`${BASE_URL}/categories`).then(response => {
      setCategories(response.data.data);
    });
    axios.get(`${BASE_URL}/products`).then(response => {
      setProducts(response.data);
    });
    axios.get(`${BASE_URL}/articles`).then(response => {
      setArticles(response.data);
    });

  }, [languages])

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home categories={categories} changelang={changelang} meta={meta} />
          </Route>
          <Route exact path="/Contact">
            <ContactUs meta={meta} changelang={changelang} />
          </Route>
          <Route exact path="/Products">
            <Products categories={categories} />
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
            <Maintenance meta={meta} changelang={changelang} />
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
            <Services meta={meta} changelang={changelang} />
          </Route>
          <Route exact path="/Rental">
            <Rental changelang={changelang} meta={meta} />
          </Route>
          <Route exact path="/Exchange">
            <Exchange meta={meta} changelang={changelang} />
          </Route>
          <Route exact path="/Spare">
            <Spare meta={meta} changelang={changelang} />
          </Route>
          <Route exact path="/Payment">
            <Payment meta={meta} changelang={changelang} />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
