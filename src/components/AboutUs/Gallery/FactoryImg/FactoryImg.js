import React, { useState, useEffect } from 'react';
import './FactoryImg.scss';
import photo from '../../Assets/about-us-3.jpg';
import Carousel from 'react-elastic-carousel';
import axios from 'axios';

const { BASE_URL } = require('../../../../config');

export default function FactoryImg() {

    const [type, setType] = useState("factory");
    const [images, setImages] = useState([]);
    useEffect(() => {
        axios.get(`${BASE_URL}/gallery/type/${type}`).then(response => {
            setImages(response.data.data)
            console.log(response.data.data)
        });

    }, [type]);
    var items = images.map(item => {
        <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
            <div className="after">{item.image_description} </div>

        </div>
    });



    return (
        <div id={'fact-img'}>
            <Carousel itemsToShow={1} showArrows={false} isRTL={false}>
                {/* <div className={'row'}>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>


                </div>
                <div className={'row'}>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>


                </div>
                <div className={'row'}>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>
                    <div className={'col-6 col-md-3 image-container'}><img alt={'...'} src={photo} className={'photo'} />
                        <div className="after">image description </div>
                    </div>


                </div> */}
                <div className={'row'}>
                    {items}
                </div>
            </Carousel>

        </div>
    )
}
