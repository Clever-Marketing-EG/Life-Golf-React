import React, { useState, useEffect } from 'react';
import './GalleryCarousel.scss';

import Carousel from 'react-elastic-carousel';


export default function GalleryCarousel({ gallery }) {

    const [data, setData] = useState([]);

    useEffect(() => {

        
        const arr = [];
        for (let i = 0; i < gallery.length; i += 8) {
            arr.push(
                gallery.slice(i, i + 8).map((item, index) => (
                    <ImageCard
                        image_url={item.image_url}
                        description={item.description}
                        key={index}
                    />
                ))
            )
        }

        setData(arr);
    }, [gallery])

    return (
        <div id={'gallery-carousel'}>
            {
                data.length === 0 ? <div />
                    : <Carousel itemsToShow={1} showArrows={false} isRTL={false}>
                        {
                            data.map((item, index) => (
                                <div className={'row test'} key={index}>
                                    {item}
                                </div>
                            ))
                        }
                    </Carousel>
            }
        </div>
    )
}


function ImageCard({ image_url, description }) {
    return (
        <div className={'col-md-3 justify-content-center image-container'}><img alt={'...'} src={image_url} className={'photo'} />
            <div className="after">{description}</div>
        </div>
    );
}
