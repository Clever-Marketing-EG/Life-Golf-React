import React from 'react';
import './AboutUs.scss';
import AboutUs1 from '../Assets/about-us-1.jpg'
import AboutUs2 from '../Assets/about-us-2.jpg'
import AboutUs3 from '../Assets/about-us-3.jpg'

export default function AboutUs() {

    return(
        <div id={'about-us'} className={'container d-flex flex-wrap-reverse justify-content-around'}>
            <div className={'left-container'}>
                <img src={AboutUs2}  alt={''} className={'about-image image-1'}/>
                <img src={AboutUs3}  alt={''} className={'about-image image-2'}/>
                <img src={AboutUs1}  alt={''} className={'about-image image-3'}/>

            </div>
            <div className={'right-container'}>
                <h1 className={'home-header'}>About Us</h1>
                <hr className={'blue-line'} />
                <p className={'home-paragraph'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                </p>
                <a className={'home-blue-button'} href={'#'}>
                    Show More
                </a>
            </div>
        </div>
    )
}
