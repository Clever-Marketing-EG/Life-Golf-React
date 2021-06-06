import React from 'react'
import Header from "../Shared/Header/Header";
import {Link} from 'react-router-dom'
import './Products.scss'

export default function Categories({categories , changelang}) {
    const setCategory = (item) => {
        localStorage.setItem("category_id",item.id)
    }

    return (
        <div id="products">
            <Header changelang={changelang} title={'Categories'} />
            <br />
            <div className="container">
                <div className="row">
                    {
                        categories.map( (item, index) => {
                            return(
                                <div className="col-3" key={index}>
                                    <div className="category_item">
                                        <img className="cat-img" src={item.image_url}  alt={'...'}/>
                                        <br />
                                        <Link onClick={setCategory(item)} to="/Products"><p className="cat-title">{item.name}</p></Link>
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
