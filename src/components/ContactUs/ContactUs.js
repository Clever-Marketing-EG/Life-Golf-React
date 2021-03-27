import React from 'react';
import './ContactUs.scss';
import phone from './Assets/icon_feather-phone.png';
import mail from './Assets/icon_feather-mail.png';
import map from './Assets/icon_feather-map-pin.png';
import Header from '../Shared/Header/Header';
export default function ContactUs({meta, changelang}) {

    return (
        <div id={'contact-us'}>
            <Header className="header" title={'Contact Us'} changelang={changelang} />
            <h1 className={'contact-title'}>We want to hear from you</h1>
            <div className={'container  margin-top-value'}>
                <div className={'row justify-content-around'}>
                    <div className={'col-md-5'}>
                        <form className="p-2">
                            <div className={'row'}>
                                <div className={'col-sm-6'}>
                                    <input type="text" className="form-control p-3" placeholder="Name" />
                                </div>
                                <div className={'col-sm-6'}>
                                    <input type="email" className="form-control p-3" placeholder="Email" />

                                </div>
                                <div className={'col-sm-12'}>
                                    <input type="text" className="form-control p-3" placeholder="Subject" />

                                </div>
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control p-3"
                                    rows="6"
                                    id="comment"
                                    placeholder="Message"
                                />
                            </div>
                            <div className={"btn-container"}>
                                <button className="btn send-btn" type="submit">
                                    Send
                                </button>
                            </div>
                        </form>

                    </div>

                    <div className={'col-md-5 '}>
                        <br />
                        <div className={'row justify-content-center'}>
                            <div className={'col-md-2 square-container'}>
                                <img src={phone} alt="" />
                            </div>
                            <div className={'col-md-5'}>
                                <h1 className={'contact-snd-title'}>Phone</h1>
                                <p className={'contact-info'}>{meta.phone_number}</p>
                            </div>
                        </div>
                        <br />
                        <div className={'row justify-content-center'}>
                            <div className={'col-md-2 square-container'}>
                                <img src={mail} alt="" />
                            </div>
                            <div className={'col-md-5'}>
                                <h1 className={'contact-snd-title'}>{meta.email}</h1>
                                <p className={'contact-info'}>{meta.email_address}</p>
                            </div>
                        </div>
                        <br />
                        <div className={'row justify-content-center'}>
                            <div className={'col-md-2 square-container'}>
                                <img src={map} alt="" />
                            </div>
                            <div className={'col-md-5'}>
                                <h1 className={'contact-snd-title'}>{meta.address}</h1>
                                <p className={'contact-info'}>{meta.co_address}</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className={'map-container'}>

                <iframe
                    className="location"
                    title={"map"}
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.74863997593!2d31.324429815070793!3d30.101384381861607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14581592d9955c01%3A0x766fc31e19db272f!2sLife%20Golf!5e0!3m2!1sen!2seg!4v1613831886433!5m2!1sen!2seg"/>
                <div className={'overlay'}/>
            </div>
        </div>
    )
}
