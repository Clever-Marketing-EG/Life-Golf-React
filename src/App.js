import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./App.css";
import tawkTo from "tawkto-react";

import Home from "./components/Home/Home";
import Products from "./components/Products/Products";
import Footer from "./components/Shared/Footer/Footer";
import ContactUs from "./components/ContactUs/ContactUs";
import AboutUs from "./components/AboutUs/AboutUs";
import Maintenance from './components/Support/Maintenance/Maintenance';
import Terms from './components/Support/Terms/Terms';
import News from './components/News/News';
import Post from './components/News/Post/Post';
import Customize from './components/Electronics/Customize/Customize';
import Product from './components/Products/Product/Product';
import Services from './components/Services/Services';
import Loader from "./components/Shared/Loader/Loader";
import Lavida from "./components/Lavida/Lavida";
import NotFound from "./components/Shared/NotFound/NotFound";
import { useTranslation } from "react-i18next";
import 'react-slideshow-image/dist/styles.css'
const { BASE_URL } = require('./config');


export default function App() {
    const { t, i18n } = useTranslation();
    const [meta, setMeta] = useState({});
    const [loaded, setLoaded] = useState(false);

    const tawkToPropertyId = '60bf6a52dd60a20abbe53bae';
    const tawkToKey = '1cb395fc348c388719f352bbce40345b138cefb7'

    useEffect(() => {
        tawkTo(tawkToPropertyId, tawkToKey)
    }, [])

    useEffect(() => {
        axios.get(`${BASE_URL}/meta`).then(response => {
            const data = response.data.data;
            console.log(response.data.data);
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
                'customize': {},
                'ElectricVichale': {}
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
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/about">
                            <AboutUs
                                meta={meta['about-us']}
                            />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/contact">
                            <ContactUs
                                meta={meta['contact']}
                            />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/products/category/:id">
                            <Products/>
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/product/:id">
                            <Product />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/terms">
                            <Terms />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/maintenance">
                            <Maintenance
                                meta={meta['maintenance']}
                            />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/news" >
                            <News />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/post/:id" >
                            <Post />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/post">
                            <Post />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/customize">
                            <Customize meta={meta['customize']} />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/services">
                            <Services
                                meta={meta}
                            />
                            <Footer meta={meta['footer']} />
                        </Route>
                        <Route path="/electricvichale">
                            <Lavida
                                meta={meta['ElectricVichale']}
                            />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

