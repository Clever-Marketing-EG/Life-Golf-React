import React, {useEffect, useState} from 'react';
import './Blogs.scss';
import Truncate from 'react-truncate';
import arrow from './Assets/arrow.png';
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next";

export default function Blogs({articles}) {
    const [data, setData] = useState([]);

    useEffect( () => {
        let dataArr;
        const lang = localStorage.getItem('lang');

        if(lang === 'ar') {
            dataArr = articles.map( item => {
                const date = new Date(item.created_at);
                return {
                    id: item.id,
                    title: item.title_ar,
                    content: item.content_ar,
                    date: date.toLocaleDateString('default', {month: 'short', day: 'numeric'}),
                    image_url: item.image_url
                }
            })
        } else {
            dataArr = articles.map( item => {
                const date = new Date(item.created_at);
                return {
                    id: item.id,
                    title: item.title,
                    content: item.content,
                    date: date.toLocaleDateString('default', {month: 'short', day: 'numeric'}),
                    image_url: item.image_url
                }
            })
        }
        console.log(dataArr);
        setData(dataArr);
    }, [articles])

    return (
        <div id={'blogs'}>
            {
                data.map( item => (
                    <Article
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        image_url={item.image_url}
                        date={item.date}
                    />
                ))
            }

        </div>
    );
}


function Article({id, title, content, date, image_url}) {
    
    const {t} = useTranslation();
    return(
        <div className={'blog-container'}>
            <div className={'row'}>
                <div className={'col-md-4'}>
                    <img className={'blog-img'} src={image_url} alt="" />
                </div>
                <div className={'col-md-5'}>
                    <h1>
                        <Truncate lines={1}>{title}</Truncate>
                    </h1>
                    <p><Truncate lines={5}>
                        {content}
                    </Truncate></p>
                    <Link className={'read'} to={'/News/'+id}>
                        {t('utils.read-more')}
                        {/*TODO*/}
                        <img className={'arrow'} src={arrow} alt="" />
                    </Link>
                </div>
                <div className={'col-md-3 '}>
                    <div className={'pink'}>
                        <h3 className="date-blog">{date}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}
