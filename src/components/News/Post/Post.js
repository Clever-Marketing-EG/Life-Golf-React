import React, { useState, useEffect } from 'react';
import './Post.scss';
import search from './Assets/search.png';
import calendar from './Assets/calendar.png';
import { Link } from 'react-router-dom';
import Header from '../../Shared/Header/Header';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import Truncate from 'react-truncate';

const { BASE_URL } = require('../../../config');
export default function Posts() {
    const { t } = useTranslation();

    const [post, setArticle] = useState([]);
    const [time, setTime] = useState([]);
    const [times, setTimes] = useState([]);
    let { id } = useParams();

    const [data, setData] = useState([]);

    useEffect(() => {
        const lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/articles`).then(response => {

            let dataArr;
            
            if (lang === 'ar') {
                dataArr = response.data.data.slice(0, 4).map(item => ({
                    id: item.id,
                    title: item.title_ar,
                    image_url: item.image_url,
                    time: new Date(item.created_at).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })
                }))
            }
            else {

                dataArr = response.data.data.slice(0, 4).map(item => ({
                    id: item.id,
                    title: item.title,
                    image_url: item.image_url,
                    time: new Date(item.created_at).toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' })
                }))
            }
            setData(dataArr);
        });
    }, [id])
    
    useEffect(() => {
        const lang = localStorage.getItem('lang');
        axios.get(`${BASE_URL}/articles/${id}`).then(response => {
            const date = new Date(response.data.data.created_at);
            setTime(date.toLocaleDateString('default', { month: 'long', day: 'numeric', year: 'numeric' }));
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
    }, [id])

    return (
        <div id={'post'}>
            <Header className="header" title={'Article'} />

            <div className={'container x'}>
                <div className={'row'}>
                    <div className={'col-md-4 left-container'}>
                        
                        {/* <div class="search-container">
                            <form dir={t('dir')} action="/action_page.php" class="search-form">
                                <input type="text" placeholder={t('utils.search')} name="search" />
                                <button type="submit" className={"pink-circle btn"}></button>
                                <img src={search} className={"path"} alt="" />
                            </form>
                        </div> */}
                        <h1 className={'mt-5'} dir={t('dir')}>{t('utils.latest-articles')}</h1>
                        {data.map((item, index) =>
                            <div key={index} dir={t('dir')} className={'row'}>
                                <div className={'col-md-4'}>
                                    <img className={'pic-1'} src={item.image_url} alt="" />
                                </div>
                                <div dir={t('dir')} className={'col-md-8 news-title'}>
                                    <Link className={'news'} to={`/news/${item.id}`}><Truncate lines={1}>{item.title}</Truncate></Link>
                                    <p className={'news-date'}>{item.time}</p>
                                </div>
                            </div>
                        )}
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