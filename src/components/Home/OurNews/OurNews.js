import React, { useEffect, useState } from "react";
import './OurNews.scss';
import Carousel, { consts } from "react-elastic-carousel";
import ArticleImg1 from '../Assets/about-us-1.jpg'
import ArticleImg2 from '../Assets/about-us-2.jpg'
import ArticleImg3 from '../Assets/about-us-3.jpg'
import Truncate from 'react-truncate';


export default function OurNews({ articles }) {


    const [Articles, setArticles] = useState([]);

    useEffect(() => {
        let lang = localStorage.getItem("lang");
        if (lang == "ar") {
            setArticles(articles.map(article => (
                < Article title={article.title_ar} content={article.content_ar} image={article.image_url} date={article.created_at} />
            )))
        } else {
            setArticles(articles.map(article => (
                <Article title={article.title} content={article.content} image={article.image_url} date={article.created_at} />
            )))
        }

    }, [articles])

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4 },
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ? <i className="icon-icon_ionic-ios-arrow-forward-4" /> :
            <i className="icon-icon_ionic-ios-arrow-forward-5" />
        return (
            <button onClick={onClick} disabled={isEdge} className={'cherry-button'}>
                {pointer}
            </button>
        )
    }

    return (
        <div id={'our-news'} className={'container d-flex flex-wrap'}>
            <div className={'left-container'}>
                <h1 className={'home-header'}>
                    Our News
                </h1>
                <hr className={'blue-line'} />
                <p className={'home-paragraph'}>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                </p>
            </div>
            <div className={'right-container'}>

                {
                    Articles.length === 0 ? <div /> : <Carousel
                        isRTL={false}
                        pagination={false}
                        itemsToShow={3}
                        renderArrow={myArrow}
                        breakPoints={breakPoints}
                        itemPadding={[25, 24]}
                        children={Articles}
                    />
                }

            </div>

        </div>
    )
}


function Article({ title, content, image, date }) {
    var fullDate = new Date(date);
    var day = fullDate.getDate();
    var month = fullDate.toLocaleString('default', { month: 'short' });
    console.log(month);

    return (
        <div className="article card" style={{ width: '18rem' }}>
            <img src={image} className="card-img-top" alt="..." />
            <div className={'date'}>
                {day} <br />
                {month}

            </div>
            <div className="card-body">
                <h5 className="card-title">
                    <Truncate lines={1}>{title}</Truncate>

                </h5>
                <p className="card-text">
                    <Truncate lines={3}>{content}</Truncate>

                </p>
                <a href="#" className="cherry-link">Read More <i className="icon-arrow-right" /></a>
            </div>
        </div>
    )
}
