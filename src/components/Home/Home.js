import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Home.scss';

// Components
import Intro from "./Intro/Intro";
import AboutUs from "./AboutUs/AboutUs";
import OurProducts from "./OurProducts/OurProducts";
import OurServices from "./OurServices/OurServices";
import OurNews from "./OurNews/OurNews";


const {BASE_URL} = require('../../config');

export default function Home({ meta }) {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        axios.get(`${BASE_URL}/categories`).then(response => {
            setCategories(response.data.data);
        });
    }, [])

    return (
        <div id={'home'} >
            <Intro meta={meta} />
            <AboutUs meta={meta} />
            <OurProducts categories={categories} />
            <OurServices />
            <OurNews />
        </div>
    )
}
