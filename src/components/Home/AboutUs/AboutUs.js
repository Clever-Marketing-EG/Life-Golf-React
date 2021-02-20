import React from 'react';
import './AboutUs.scss';
import AboutUs1 from '../Assets/about-us-1.jpg'
import AboutUs2 from '../Assets/about-us-2.jpg'
import AboutUs3 from '../Assets/about-us-3.jpg'

export default function AboutUs() {

    return(
        <div id={'about-us'} className={'container d-flex flex-wrap-reverse'}>
            <div className={'left-container'}>
                <img src={AboutUs1}  alt={''}/>

            </div>
            <div className={'right-container'}>

            </div>
        </div>
    )
}
