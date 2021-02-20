import React from 'react';
import './ProductCar.scss';
import Carousel from 'react-elastic-carousel';

export default function ProductCar() {

    return (
        <div id={'Prod'}>
            <Carousel itemsToShow={4} pagination={false}>
                <div>1</div>
                <div>1</div>
                <div>1</div>
                <div>1</div>
            </Carousel>

        </div>
    )
}
