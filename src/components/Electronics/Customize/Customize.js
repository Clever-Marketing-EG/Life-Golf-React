import React from 'react';
import Truncate from 'react-truncate';
import './Customize.scss';
import pic from '../../AboutUs/Assets/about-us-3.jpg';
import Form from './Form/Form';
export default function Customize() {
    return (
        <div id={'custom'}>
            <div className={'container mt-5'}>
                <div className={'row'}>
                    <div className={'col-md-5'}>
                        <img className={'custom-img'} src={pic} alt="" />
                    </div>
                    <div className={'col-md-6'}>
                        <h1 className={'custom-title'}>Customize your order with life golf</h1>
                        <hr />
                        <p className={'custom-p'}>
                            <Truncate lines={6}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin vulputate porta. Quisque ut hendrerit est, a pulvinar augue. Morbi vel massa at tellus porta dignissim. Praesent mauris ante, lobortis at erat quis, placerat pellentesque erat. Morbi vitae suscipit nibh. Ut volutpat justo ut metus condimentum, sit amet tincidunt dui maximus. Suspendisse pretium erat nec lorem lobortis aliquet. Nam ut dui dui. Donec eget fringilla ex. Etiam varius arcu id scelerisque commodo. Mauris ornare a ante a tincidunt. Nullam nec elit metus. Donec eget scelerisque purus.

                            </Truncate>
                        </p>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    );
}