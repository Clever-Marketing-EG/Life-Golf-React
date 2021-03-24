import React from 'react'
import Header from "../Shared/Header/Header";
import {Link} from 'react-router-dom'
import './Products.scss'
export default function Categories({categories , changelang}) {
    return (
        <div id="products">
        <Header changelang="changelang" title={'Categories'} />
        <br />
        <div className="container">
        <div className="row">
            {
                categories.map(item => {
                    return(
                        <div className="col-3">
                            <div className="category_item">
                            <img className="cat-img" src={item.image_url} /><br />
                            <Link onClick={()=>{
                                localStorage.setItem("category_id",item.id)
                            }} to="/Products"><p className="cat-title">{item.name}</p></Link>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </div>
        </div>
    )
}
