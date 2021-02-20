import React from 'react';
import './Footer.scss';
import logo from './Assets/olio-02.a0d26e46-1.png';
export default function Footer() {

    return (
        <div id={'footer'}>
            <footer className={'footer-background'}>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className={'col-md-3'}>
                            <img src={logo} alt="" />
                            <p className={'footer-desc'}>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
