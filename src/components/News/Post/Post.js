import React, { useState, useEffect } from 'react';
import Truncate from 'react-truncate';
import './Post.scss';
import pic from '../Blogs/Assets/about-us-3.jpg';
import search from './Assets/search.png';
import calendar from './Assets/calendar.png';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {useTranslation} from "react-i18next";

const { BASE_URL } = require('../../../config');
export default function Posts() {
    const {t} = useTranslation();

    const [post, setArticle] = useState([]);
    const [time, setTime] = useState([]);
    let { id } = useParams();

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/articles/${id}`).then(response => {
            const date = new Date(response.data.data.created_at);
            setTime(date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric'}));
            setArticle(response.data.data);
            if (lang === 'ar') {

                var dataObject = {
                    title: response.data.data.title_ar,
                    content: response.data.data.content_ar,
                    image_url: response.data.data.image_url
                }
            } else {
              
                var dataObject = {
                    title: response.data.data.title,
                    content: response.data.data.content,
                    image_url: response.data.data.image_url

                }
            }
            setArticle(dataObject);



        });
    }, [])
    return (
        <div id={'post'}>
            <Header className="header" title={'Article'} />

            <div  className={'container x'}>
                <div className={'row'}>
                    <div  className={'col-md-4 left-container'}>
                        <div class="search-container">
                            <form dir={t('dir')}  action="/action_page.php" class="search-form">
                                <input type="text" placeholder={t('utils.search')} name="search" />
                                <button type="submit" className={"pink-circle btn"}></button>
                                <img src={search} className={"path"} alt="" />
                            </form>
                        </div>
                        <h1  dir={t('dir')}>{t('utils.popular-posts')}</h1>
                        <div dir={t('dir')} className={'row'}>
                            <div className={'col-md-4'}>
                                <img className={'pic-1'} src={pic} alt="" />

                            </div>
                            <div className={'col-md-8'}>
                                <h2>News Title</h2>
                                <p className={'news-date'}>19 augs,2020 - by Bassem</p>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-7 order-first order-md-last"}>
                        {/* <Carousel itemsToShow={1} showArrows={false}>
                            {/* <img className={'img-car'} src={pic} alt="" />
                            <img className={'img-car'} src={pic} alt="" /> */} 
                        {/* </Carousel> */}
                        <img className={'img-car'} src={post.image_url} alt="" />

                        <h1 className={"main-title"}>{post.title}</h1>
                        <div className={"row test-margin"}>
                            <div className={" new-width"}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className={"col-md-2 new-padding"}>
                                <p className={"date-user"}>{time}</p>
                            </div>

                        </div>
                        <p className={"main-article-content"}>{post.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}