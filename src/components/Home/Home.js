import React from 'react';
import './Home.scss';

// Components
import Intro from "./Intro/Intro";
import AboutUs from "./AboutUs/AboutUs";
import OurProducts from "./OurProducts/OurProducts";
import OurServices from "./OurServices/OurServices";
import OurNews from "./OurNews/OurNews";


export default function Home({ meta, changelang, categories }) {

    return (
        <div id={'home'} >
            <Intro changelang={changelang} meta={meta} />
            <AboutUs meta={meta} />
            <OurProducts categories={categories} />
            <OurServices />
            <OurNews />
        </div>
    )
}
