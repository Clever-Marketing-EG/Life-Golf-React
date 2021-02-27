import React from 'react';
import './Blogs.scss';
import Truncate from 'react-truncate';
import pic from './Assets/about-us-3.jpg';
import arrow from './Assets/arrow.png';
import { Link } from 'react-router-dom';
export default function Blogs() {
    return (
        <div id={'blogs'}>
            <div className={'blog-container'}>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <img className={'blog-img'} src={pic} alt="" />
                    </div>
                    <div className={'col-md-5'}>
                        <h1>Blog title</h1>
                        <p><Truncate lines={5}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et.</Truncate></p>
                        <Link className={'read'}>
                            Read More
                        <img className={'arrow'} src={arrow} alt="" />
                        </Link>
                    </div>
                    <div className={'col-md-3 '}>
                        <div className={'pink'}>
                            <h3>19 Jan</h3>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}