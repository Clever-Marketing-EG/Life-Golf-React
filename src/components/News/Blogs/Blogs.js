import React from 'react';
import './Blogs.scss';
import Truncate from 'react-truncate';
import pic from './Assets/about-us-3.jpg';
import arrow from './Assets/arrow.png';
import { Link } from 'react-router-dom';
export default function Blogs({articles}) {
    return (
        <div id={'blogs'}>
            {articles.map(item=>{
                return (<div onClick={()=>{
                    localStorage.setItem("post_id",item.id)
                }} className={'blog-container'}>
                <div className={'row'}>
                    <div className={'col-md-4'}>
                        <img className={'blog-img'} src={item.image_url} alt="" />
                    </div>
                    <div className={'col-md-5'}>
                        <h1>
                            {item.title}

                        </h1>
                        <p><Truncate lines={5}>
                        {item.content}
                            
                            </Truncate></p>
                        <Link className={'read'}>
                            Read More
                        <img className={'arrow'} src={arrow} alt="" />
                        </Link>
                    </div>
                    <div className={'col-md-3 '}>
                        <div className={'pink'}>
                            <h3 className="date-blog">{item.created_at}</h3>
                        </div>
                    </div>
                </div>
                <br />
            </div>)
            })}
            
        </div>
    );
}