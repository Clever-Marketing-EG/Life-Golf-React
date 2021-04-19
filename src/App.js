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
import NotFound from "./components/Shared/NotFound/NotFound";
import { useTranslation } from "react-i18next";

const { BASE_URL } = require('./config');


export default function App() {
    const { t, i18n } = useTranslation();
    const [meta, setMeta] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`${BASE_URL}/meta`).then(response => {
            const data = response.data.data;
            console.log(data);
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
                        <Route path="/about">
                            <AboutUs
                                meta={meta['about-us']}
                            />
                        </Route>
                        <Route path="/contact">
                            <ContactUs
                                meta={meta['contact']}
                            />
                        </Route>
                        <Route path="/categories/:id/products">
                            <Products
                            />
                        </Route>
                        <Route path="/products/:id">
                            <Product />
                        </Route>
                        <Route path="/terms">
                            <Terms />
                        </Route>
                        <Route path="/maintenance">
                            <Maintenance
                                meta={meta['maintenance']}
                            />
                        </Route>
                        <Route path="/news" >
                            <News />
                        </Route>
                        <Route path="/post/:id" >
                            <Post />
                        </Route>
                        <Route path="/post">
                            <Post />
                        </Route>
                        {/*<Route path="/electronics">*/}
                        {/*    <Electronics meta={meta['electronics']} />*/}
                        {/*</Route>*/}
                        <Route path="/customize">
                            <Customize meta={meta['customize']} />
                        </Route>
                        <Route path="/services">
                            <Services
                                meta={meta}
                            />
                        </Route>
                        <Route path="/service/:id">
                            <Rental
                                meta={meta}
                            />
                        </Route>
                        <Route component={NotFound} />
                    </Switch>
                    <Footer meta={meta['footer']} />
                </Router>

            </div>
        );
    }
}

