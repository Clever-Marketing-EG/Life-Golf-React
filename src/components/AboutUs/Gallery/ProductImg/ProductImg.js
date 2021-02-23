import React from 'react';
import './ProductImg.scss';
import Carousel  from 'react-elastic-carousel';
import photo from '../../Assets/about-us-3.jpg';

export default function ProductImg() {


    return (
        <div id={'product-img'}>
            <Carousel itemsToShow={1} showArrows={false} isRTL={false}>
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
            </Carousel>

        </div>
    )
}
