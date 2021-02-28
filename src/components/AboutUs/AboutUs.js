import React from 'react';
import './AboutUs.scss';
import pic from './Assets/about-us-3.jpg';
import pic1 from './Assets/mask_group_10.png';
import pic2 from './Assets/mask_group_11.png';
import pic3 from './Assets/mask_group_12.png';
import pic4 from './Assets/mask_group_13.png';
import Certifiactes from './Certificates/Certificates';
import Videos from './Videos/Videos';
import Gallery from './Gallery/Gallery';
import Header from '../Shared/Header/Header';

export default function AboutUs() {

    return (
        <div id={'about'}>
            <Header className="header" title={'About Us'} />
            <div className={'container d-flex flex-wrap justify-content-around xs'}>
                <div className={'d-flex left-container'}>
                    <div className={'d-flex flex-column pic-col justify-content-between me-2'}>
                        <img src={pic} className={'pic top mb-2'} alt="" />
                        <img src={pic} className={'pic bottom'} alt="" />
                    </div>
                    <div className={'d-flex flex-column pic-col justify-content-between mt-5'}>
                        <img src={pic} className={'pic top mb-2'} alt="" />
                        <img src={pic} className={'pic bottom'} alt="" />
                    </div>

                </div>
                <div className={'right-container'}>
                    <h1 className={'about-title'}>Get to know us better</h1>
                    <hr />
                    <p className={'abt-p'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam  </p>
                    <br />
                    <p className={'abt-p'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor </p>
                    <div className={'row'}>
                        <div className={'col-md-3 border-right'}>
                            <img src={pic1} alt="" />
                            <h1 className={'first-h'}>125</h1>
                            <p className={'first-p'}>Happy clients</p>
                        </div>
                        <div className={'col-md-3 border-right'}>
                            <img src={pic2} alt="" />
                            <h1 className={'first-h'}>125</h1>
                            <p className={'first-p'}>Years of Experience</p>
                        </div>
                        <div className={'col-md-3 border-right'}>
                            <img src={pic3} alt="" />
                            <h1 className={'first-h'}>125</h1>
                            <p className={'first-p'}>Engineers</p>
                        </div>
                        <div className={'col-md-3'}>
                            <img src={pic4} alt="" />
                            <h1 className={'first-h'}>125</h1>
                            <p className={'first-p'}>Vehicle sold</p>
                        </div>

                    </div>
                </div>
            </div>
            <div className={'container'}>

                <Certifiactes />
                <Videos />
                <Gallery />
            </div>

        </div >
    )
}
