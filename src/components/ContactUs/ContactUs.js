import React from 'react';
import './ContactUs.scss';
import phone from './Assets/icon_feather-phone.png';
import mail from './Assets/icon_feather-mail.png';
import map from './Assets/icon_feather-map-pin.png';
export default function ContactUs() {

    return (
        <div id={'contact-us'}>
            <h1 className={'contact-title'}>We want to hear from you</h1>
            <div className={'container  margin-top-value'}>
                <div className={'row justify-content-around'}>
                    <div className={'col-md-5'}>
                        <from className="p-2">
                            <div className={'row'}>
                                <div className={'col-sm-6'}>
                                    <input type="text" class="form-control" placeholder="Name" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="email" class="form-control" placeholder="Email" />

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" class="form-control" placeholder="Subject" />

                                </div>
                            </div>
                            <div class="form-group">
                                <textarea
                                    class="form-control"
                                    rows="6"
                                    id="comment"
                                    placeholder="Message"
                                ></textarea>
                            </div>
                            <div className={"btn-container"}>
                                <button class="btn send-btn" type="submit">
                                    Send
                                </button>
                            </div>
                        </from>

                    </div>
                    
                    <div className={'col-md-5 '}>
                        <br/>
                        <div className={'row '}>
                            <div className={'col-md-2 square-container'}>
                                <img src={phone} alt="" />
                            </div>
                            <div className={'col-md-4'}>
                                <h1 className={'contact-snd-title'}>Phone</h1>
                                <p className={'contact-info'}>+012 345 678 910</p>
                            </div>
                        </div>
                        <br/>
                        <div className={'row'}>
                            <div className={'col-md-2 square-container'}>
                                <img src={mail} alt="" />
                            </div>
                            <div className={'col-md-4'}>
                                <h1 className={'contact-snd-title'}>Email</h1>
                                <p className={'contact-info'}>support@life-golf-car.com</p>
                            </div>
                        </div>
                        <br/>
                        <div className={'row'}>
                            <div className={'col-md-2 square-container'}>
                                <img src={map} alt="" />
                            </div>
                            <div className={'col-md-4'}>
                                <h1 className={'contact-snd-title'}>Address</h1>
                                <p className={'contact-info'}>Cairo,Egypt</p>
                            </div>
                        </div>
                        <br/>
                    </div>

                </div>
            </div>
            <div className={'map-container'}>
               
                <iframe 
                className="location"
                title={"map"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.74863997593!2d31.324429815070793!3d30.101384381861607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581592d9955c01%3A0x766fc31e19db272f!2sLife%20Golf!5e0!3m2!1sen!2seg!4v1613831886433!5m2!1sen!2seg"></iframe>
                <div className={'overlay'}></div>
            </div>
        </div>
    )
}
