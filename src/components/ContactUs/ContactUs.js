import React from 'react';
import './ContactUs.scss';
import phone from './Assets/icon_feather-phone.png';
import mail from './Assets/icon_feather-mail.png';
import map from './Assets/icon_feather-map-pin.png';
import { matchPath } from 'react-router-dom';
export default function ContactUs() {

    return (
        <div id={'contact-us'}>
            <h1 className={'contact-title'}>We want to hear from you</h1>
            <div className={'container  margin-top-value'}>
                <div className={'row justify-content-center'}>
                    <div className={'col-md-5 margin-bet'}>
                        <from>
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
                    
                    <div className={'col-md-5'}>
                        <div className={'row'}>
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
                    src="https://www.google.com/maps?q=Life%20Chemicals%20Group%2C%20El%20Hegaz%20Street%2C%20El-Nozha%2C%20El%20Nozha%2C%20Egypt&z=14&t=&ie=UTF8&output=embed"
                />
            </div>
        </div>
    )
}
