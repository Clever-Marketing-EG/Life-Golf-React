import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect, useState} from 'react';
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
import Prod from './components/Products/Product/Product';
import Services from './components/Services/Services';
import Rental from './components/Services/Rental/Rental';
import Exchange from './components/Services/Exchange/Exchange';
import Spare from './components/Services/Spare/Spare';
import Payment from './components/Services/Payment/Payment';
import Categories from './components/Products/Categories'
import Loader from "./components/Shared/Loader/Loader";

const { BASE_URL } = require('./config');


function App() {
    const [meta, setMeta] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect( () => {
        axios.get(`${BASE_URL}/meta`).then(response => {
            const data = response.data.data;

            const lang = localStorage.getItem('lang');

            const dataObject = {
                'home': {}
            };
            if(lang === 'ar') {
                data.forEach( (item) => {
                    dataObject[item.page][item.name] = item.content_ar;
                })
            } else {
                data.forEach( (item) => {
                    dataObject[item.page][item.name] = item.content;
                })
            }
            setMeta(dataObject);
            setLoaded(true);
        });
    }, [])


    if(!loaded) {
        return <Loader /> ;
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
                        <Route exact path="/Categories">
                            <Categories
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Contact">
                            <ContactUs
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Products">
                            <Products
                            />
                        </Route>
                        <Route exact path="/About">
                            <AboutUs />
                        </Route>
                        <Route exact path="/Product">
                            <Prod />
                        </Route>
                        <Route exact path="/Terms">
                            <Terms />
                        </Route>
                        <Route exact path="/Maintenance">
                            <Maintenance
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/News" >
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
                        <Route exact path="/Services">
                            <Services
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Rental">
                            <Rental
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Exchange">
                            <Exchange
                                meta={meta}
                            />
                        </Route>
                        <Route exact path = "/Spare" >
                            <Spare
                                meta={meta}
                            />
                        </Route>
                        <Route exact path="/Payment">
                            <Payment
                                meta={meta}
                            />
                        </Route>
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;
