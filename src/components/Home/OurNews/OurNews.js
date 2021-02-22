import React from "react";
import './OurNews.scss';
import Carousel, { consts } from "react-elastic-carousel";
import ArticleImg1 from '../Assets/about-us-1.jpg'
import ArticleImg2 from '../Assets/about-us-2.jpg'
import ArticleImg3 from '../Assets/about-us-3.jpg'



export default function OurNews() {

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
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                    <Article />
                </Carousel>
            </div>

        </div>
    )
}


function Article() {
    return(
        <div className="article card" style={{width: '18rem'}}>
            <img src={ArticleImg1} className="card-img-top" alt="..." />
            <div className={'date'}>
                19 Jan
            </div>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk
                    of the card's content.</p>
                <a href="#" className="cherry-link">Read More <i className="icon-arrow-right"/></a>
            </div>
        </div>
    )
}
