import React from 'react';
import Truncate from 'react-truncate';
import './Electronics.scss';
import pic from '../AboutUs/Assets/about-us-3.jpg';
import LeftForm from './LeftForm/LeftForm';
import Header from '../Shared/Header/Header';
export default function Electronics() {
    return (
        <div id={'electronics'}>
            <Header className="header" title={'Electronics order'} />

            <div className={'container mt'}>
                <div className={'row'}>
                    <div className={'col-md-5'}>
                        <img className={'electronic-img'} src={pic} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1 className={'electronic-title'}>Order electronics and spare parts</h1>
                        <hr />
                        <p className={'electronic-p'}>
                            <Truncate lines={6}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin vulputate porta. Quisque ut hendrerit est, a pulvinar augue. Morbi vel massa at tellus porta dignissim. Praesent mauris ante, lobortis at erat quis, placerat pellentesque erat. Morbi vitae suscipit nibh. Ut volutpat justo ut metus condimentum, sit amet tincidunt dui maximus. Suspendisse pretium erat nec lorem lobortis aliquet. Nam ut dui dui. Donec eget fringilla ex. Etiam varius arcu id scelerisque commodo. Mauris ornare a ante a tincidunt. Nullam nec elit metus. Donec eget scelerisque purus.

                            </Truncate>
                        </p>
                    </div>
                </div>

                <LeftForm />
            </div>
        </div>
    );
}