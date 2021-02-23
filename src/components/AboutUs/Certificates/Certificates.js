import React from 'react';
import './Certificates.scss';
import ProductCar from '../ProductsCar/ProductCar'
import VehicleCar from '../VehicleCar/VehicleCar'

export default function Certifiactes() {

    return (
        <div id={'cert'}>
            <div className={'container'}>
                <h1 className={'cert-title'}>Our honors and certificate</h1>
                <div className={'navigator'}>
                    <ul className="nav nav-pills mb-3 justify-content-center" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Electronic Product</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Electronic vehicle</button>
                        </li>

                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                            <ProductCar />
                        </div>
                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <VehicleCar />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
