import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Maintenance from './components/Support/Maintenance/Maintenance';
import Terms from './components/Support/Terms/Terms';
import News from './components/News/News';
import Post from './components/News/Post/Post';
import Electronics from './components/Electronics/Electronics';
import Customize from './components/Electronics/Customize/Customize';
import Product from './components/Products/Product/Product';
import Services from './components/Services/Services';
import Rental from './components/Services/Rental/Rental';
import Loader from "./components/Shared/Loader/Loader";
import { useTranslation } from "react-i18next";

const { BASE_URL } = require('./config');


export default function App() {
    const { t, i18n } = useTranslation();
    const [meta, setMeta] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/meta`).then(response => {
            const data = response.data.data;

            const lang = localStorage.getItem('lang');

            const html = document.querySelector('html');
            html.lang = lang;
            
            i18n.changeLanguage(lang);

            const dataObject = {
                'home': {},
                'about-us': {},
                'footer': {},
                'maintenance': {},
                'contact': {},
                'electronics': {},
                'customize': {}
            };

            if (lang === 'ar') {
                data.forEach((item) => {
                    dataObject[item.page][item.name] = item.content_ar;
                })
            } else {
                data.forEach((item) => {
                    dataObject[item.page][item.name] = item.content;
                })
            }
            setMeta(dataObject);
            setLoaded(true);
        });
    }, [])


    if (!loaded) {
        return <Loader />;
    }
    else {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Home
                                meta={meta['home']}
                            />
                        </Route>
                        <Route exact path="/About">
                            <AboutUs
                                meta={meta['about-us']}
                            />
                        </Route>
                        <Route exact path="/Contact">
                            <ContactUs
                                meta={meta['contact']}
                            />
                        </Route>
                        <Route exact path="/products">
                            <Products
                            />
                        </Route>
                        <Route exact path="/products/:id">
                            <Product />
                        </Route>
                        <Route exact path="/Terms">
                            <Terms />
                        </Route>
                        <Route exact path="/Maintenance">
                            <Maintenance
                                meta={meta['maintenance']}
                            />
                        </Route>
                        <Route exact path="/News" >
                            <News />
                        </Route>
                        <Route exact path="/News/:id" >
                            <Post />
                        </Route>
                        <Route exact path="/Post">
                            <Post />
                        </Route>
                        <Route exact path="/Electronics">
                            <Electronics meta={meta['electronics']} />
                        </Route>
                        <Route exact path="/customize">
                            <Customize meta={meta['customize']} />
                        </Route>
                        <Route exact path="/Services">
                            <Services
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Services/:id">
                            <Rental
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Services/:name">
                            <Rental
                                meta={meta}
                            />
                        </Route>


                    </Switch>
                    <Footer meta={meta['footer']} />
                </Router>
            </div>
        );
    }
}

