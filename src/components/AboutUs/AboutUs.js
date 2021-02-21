import React from 'react';
import './AboutUs.scss';
import pic from './Assets/pexels-tiger-lily-4487421-2.png';
import pic1 from './Assets/mask_group_10.png';
import pic2 from './Assets/mask_group_11.png';
import pic3 from './Assets/mask_group_12.png';
import pic4 from './Assets/mask_group_13.png';
import Certifiactes from './Certificates/Certificates'
export default function AboutUs() {

    return (
        <div id={'about-us'}>
            <div className={'container'}>
                <div className={'row'}>
                    <div className={'col-md-6'}>
                        <img src={pic} alt=""/>

                    </div>
                    <div className={'col-md-5'}>
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
                <Certifiactes/>
            </div>

        </div>
    )
}
