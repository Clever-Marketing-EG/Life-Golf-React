import React from 'react';
import './Maintenance.scss';
import one from './Assets/path_146.png';
import two from './Assets/path_148.png';
import three from './Assets/path_150.png';
import pic from './Assets/about-us-3.jpg';
import Truncate from 'react-truncate';
import Header from '../../Shared/Header/Header';
export default function Maintenance() {

    return (
        <div id={'maintenance'}>
            <Header className="header" title={'Maintenance'} />

            <div className={'container'}>
                <div className={'row justify-content-around mrg-btm'}>
                    <div className={'col-md-5 marg-bottom'}>
                        <h1 className={'title-one'}>Electric Vehicle</h1>
                        <hr />
                        <p><Truncate lines={6}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                    </div>
                    <div className={'col-md-5'}>
                        <div className={'img-container'}>
                            <img className={'img-one'} src={pic} alt="" />
                            <img className={'img-two'} src={one} alt="" />
                        </div>
                    </div>
                </div>
                <div className={'row justify-content-around mrg-btm'}>

                    <div className={'col-md-5  order-last order-md-first'}>
                        <div className={'img-container'}>
                            <img className={'img-one'} src={pic} alt="" />
                            <img className={'img-x'} src={two} alt="" />
                        </div>
                    </div>
                    <div className={'col-md-5 marg-bottom'}>
                        <h1 className={'title-one'}>Battery maintenance</h1>
                        <hr />
                        <p><Truncate lines={6}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                    </div>
                </div>
                <div className={'row justify-content-around'}>
                    <div className={'col-md-5 marg-bottom'}>
                        <h1 className={'title-one'}>Battery Care</h1>
                        <hr />
                        <p><Truncate lines={6}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                    </div>
                    <div className={'col-md-5'}>
                        <div className={'img-container'}>
                            <img className={'img-one'} src={pic} alt="" />
                            <img className={'img-three'} src={three} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
