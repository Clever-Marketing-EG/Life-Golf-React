import React from 'react';
import './Home.scss';
import Intro from "./Intro/Intro";
import AboutUs from "./AboutUs/AboutUs";
import OurProducts from "./OurProducts/OurProducts";
import OurServices from "./OurServices/OurServices";

export default function Home() {

    return(
        <div id={'home'} >
            <Intro />
            <AboutUs />
            <OurProducts />
            <OurServices />
        </div>
    )
}
