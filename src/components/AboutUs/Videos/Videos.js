import React, {useEffect, useState} from 'react';
import './Videos.scss';
import FactoryVid from './FactoryVid/FactoryVid';
import ProductVid from './ProductVid/ProductVid';
export default function Videos( {videos} ) {
    const [data, setData] = useState({
        product: [],
        factory: []
    });


    useEffect(() => {
        const lang = localStorage.getItem('lang');
        let dataObj = {
            product: [],
            factory: []
        };

        if(lang === 'ar') {
            videos.forEach( item => {
                dataObj[item.type].push({
                    title: item.title_ar,
                    description: item.description_ar,
                    image_url: item.image_url,
                    video_url: item.video_url
                })
            })
        } else {
            videos.forEach( item => {
                dataObj[item.type].push({
                    title: item.title,
                    description: item.description,
                    image_url: item.image_url,
                    video_url: item.video_url
                })
            })
        }
        console.log(dataObj);
        setData(dataObj);
    }, [videos])

    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title '}>Video presentation</h1>
                <div className={'navigator'}>
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-factory" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Factory videos</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product videos</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-factory" role="tabpanel" aria-labelledby="pills-home-tab">
                            <FactoryVid />
                        </div>
                        <div className="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <ProductVid />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
