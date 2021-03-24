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
const { BASE_URL } = require('../../../config');
export default function Posts() {
    const [post, setArticle] = useState([]);
    useEffect(() => {
        let pid = localStorage.getItem("post_id")
        axios.get(`${BASE_URL}/articles/${pid}`).then(response => {
        setArticle(response.data.data);
        });
      },[])
    return (
        <div id={'post'}>
            <Header className="header" title={post.title} />

            <div className={'container x'}>
                <div className={'row'}>
                    <div className={'col-md-4 left-container'}>
                        <div class="search-container">
                            <form action="/action_page.php" class="search-form">
                                <input type="text" placeholder="   Search.." name="search" />
                                <button type="submit" className={"pink-circle btn"}></button>
                                <img src={search} className={"path"} alt="" />
                            </form>
                        </div>
                        <h1>Popular posts</h1>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <img className={'pic-1'} src={pic} alt="" />

                            </div>
                            <div className={'col-md-8'}>
                                <h2>News Title</h2>
                                <p className={'news-date'}>19 augs,2020 - by Bassem</p>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <img className={'pic-1'} src={pic} alt="" />

                            </div>
                            <div className={'col-md-8'}>
                                <h2>News Title</h2>
                                <p className={'news-date'}>19 augs,2020 - by Bassem</p>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-md-4'}>
                                <img className={'pic-1'} src={pic} alt="" />

                            </div>
                            <div className={'col-md-8'}>
                                <h2>News Title</h2>
                                <p className={'news-date'}>19 augs,2020 - by Bassem</p>
                            </div>
                        </div>
                        <h1 className={"tags"}>Tags</h1>
                        <div className={"row m-left"}>
                            <Link className={"col-md-3 tag-container"}>tag</Link>
                            <Link className={"col-md-3 tag-container"}>tag</Link>
                            <Link className={"col-md-3 tag-container"}>tag</Link>
                            <Link className={"col-md-3 tag-container"}>tag</Link>
                            <Link className={"col-md-3 tag-container"}>tag</Link>

                        </div>
                    </div>
                    <div className={"col-md-7 order-first order-md-last"}>
                        <Carousel itemsToShow={1} showArrows={false}>
                            <img className={'img-car'} src={pic} alt="" />
                            <img className={'img-car'} src={pic} alt="" />
                            <img className={'img-car'} src={pic} alt="" />
                        </Carousel>
                        <h1 className={"main-title"}>{post.title}</h1>
                        <div className={"row test-margin"}>
                            <div className={" new-width"}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className={"col-md-2 new-padding"}>
                                <p className={"date-user"}>{post.created_at}</p>
                            </div>

                        </div>
                        <p className={"main-article-content"}>{post.content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}