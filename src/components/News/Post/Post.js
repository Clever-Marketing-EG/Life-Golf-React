import React from 'react';
import Truncate from 'react-truncate';
import './Post.scss';
import pic from '../Blogs/Assets/about-us-3.jpg';
import search from './Assets/search.png';
import calendar from './Assets/calendar.png';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';
export default function Posts() {
    return (
        <div id={'post'}>
            <div className={'container mt-5'}>
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
                            <Link className={"col-md-2 tag-container"}>tag</Link>
                            <Link className={"col-md-2 tag-container"}>tag</Link>
                            <Link className={"col-md-2 tag-container"}>tag</Link>
                            <Link className={"col-md-2 tag-container"}>tag</Link>
                            <Link className={"col-md-2 tag-container"}>tag</Link>

                        </div>

                    </div>
                    <div className={"col-md-7 order-first order-md-last"}>
                        <Carousel itemsToShow={1} showArrows={false}>
                            <img className={'img-car'} src={pic} alt="" />
                            <img className={'img-car'} src={pic} alt="" />
                            <img className={'img-car'} src={pic} alt="" />
                        </Carousel>
                        <h1 className={"main-title"}>Huge number of carts created at 2020</h1>
                        <div className={"row test-margin"}>
                            <div className={"col-md-2 new-width"}>
                                <img src={calendar} alt="" />
                            </div>
                            <div className={"col-md  new-padding"}>
                                <p className={"date-user"}>19 augs,2020</p>
                            </div>

                        </div>
                        <p className={"main-article-content"}>Proin elementum neque nec leo finibus laoreet. Proin sit amet nibh sapien. Suspendisse hendrerit at enim eu porta. Duis egestas, est nec facilisis tincidunt, eros metus dignissim ligula, vel maximus nisi lorem in quam. Phasellus congue consequat nulla vel finibus. Morbi vitae condimentum tellus, eu consequat massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget arcu et dolor venenatis lobortis. Ut tincidunt ex risus, in pretium lectus posuere ut. Donec et metus in nulla suscipit scelerisque. Etiam dictum, massa a feugiat fermentum, felis diam dignissim orci, quis ullamcorper metus mi pharetra est. Donec commodo elementum bibendum.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}