import React from 'react';
import './Home.scss';

// Components
import Intro from "./Intro/Intro";
import AboutUs from "./AboutUs/AboutUs";
import OurProducts from "./OurProducts/OurProducts";
import OurServices from "./OurServices/OurServices";
import OurNews from "./OurNews/OurNews";


export default function Home() {

    return(
        <div id={'home'} >
            <Intro />
            <AboutUs />
            <OurProducts />
            <OurServices />
            <OurNews />
        </div>
    )
}
