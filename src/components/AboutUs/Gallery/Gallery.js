import React from 'react';
import './Gallery.scss';
import GalleryCarousel from "./GalleryCarousel/GalleryCarousel";

export default function Gallery( {galleries} ) {

    console.log(galleries);

    return (
        <div id={'videos'}>
            <div className={'container'}>
                <h1 className={'vid-title'}>Our gallery</h1>
                <div className={'navigator'}>
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-factory-img" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Factory images</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-product-img" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Product images</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-factory-img" role="tabpanel" aria-labelledby="pills-home-tab">
                            <GalleryCarousel />
                        </div>
                        <div className="tab-pane fade" id="pills-product-img" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <GalleryCarousel />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
