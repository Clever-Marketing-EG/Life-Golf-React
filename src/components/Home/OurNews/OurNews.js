import React from "react";
import './OurNews.scss';
import Carousel, { consts } from "react-elastic-carousel";
import ArticleImg1 from '../Assets/about-us-1.jpg'
import ArticleImg2 from '../Assets/about-us-2.jpg'
import ArticleImg3 from '../Assets/about-us-3.jpg'



export default function OurNews({articles}) {

    const data = [
        {
            title: 'Article One',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg1,
            date: '19 Jan'
        },
        {
            title: 'Article Two',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg2,
            date: '28 Feb'
        },
        {
            title: 'Article Three',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg3,
            date: '11 Mar'
        },
        {
            title: 'Article Four',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg1,
            date: '22 Apr'
        },
        {
            title: 'Article Five',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg2,
            date: '15 May'
        },
        {
            title: 'Article Six',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg3,
            date: '13 Jun'
        },
        {
            title: 'Article Seven',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas lacinia porta eros in mollis. Sed felis ligula, cursus eget finibus eu, hendrerit eget mauris.',
            image_url: ArticleImg1,
            date: '5 Jul'
        },
    ]

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4},
        { width: 1450, itemsToShow: 5 },
        { width: 1750, itemsToShow: 6 },
    ];

    function myArrow({ type, onClick, isEdge }) {
        const pointer = type === consts.PREV ?<i className="icon-icon_ionic-ios-arrow-forward-4"/> :
            <i className="icon-icon_ionic-ios-arrow-forward-5"/>
        return (
            <button onClick={onClick} disabled={isEdge} className={'cherry-button'}>
                {pointer}
            </button>
        )
    }

    return(
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
                <Carousel
                    isRTL={false}
                    pagination={false}
                    itemsToShow={3}
                    itemPadding={[25, 24]}
                    renderArrow={myArrow}
                    breakPoints={breakPoints}
                >
                    {
                        data.map((article,index) => (
                            <Article
                                key={index}
                                title={article.title}
                                content={article.content}
                                image_url={article.image_url}
                                date={article.date}
                            />
                        ))
                    }
                </Carousel>
            </div>

        </div>
    )
}


function Article({ title, content, date, image_url}) {
    return(
        <div className="article card" style={{width: '18rem'}}>
            <img src={image_url} className="card-img-top" alt="..." />
            <div className={'date'}>
                {date}
            </div>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{content}</p>
                <a href="#" className="cherry-link">Read More <i className="icon-arrow-right"/></a>
            </div>
        </div>
    )
}
