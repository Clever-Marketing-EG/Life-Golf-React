import React from 'react';
import './Specifications.scss';
export default function Specifications({product}) {
    return (
        <div id={'specifications'} className={'specs-table'}>
            <table>
                <tr>
                    <th className={'special one'}>Battery</th>
                    <th className={'not two'}>{product.bettery}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Acceleration</th>
                    <th className={'not two'}>{product.acceleration}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Model</th>
                    <th className={'not two'}>{product.model}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Controller</th>
                    <th className={'not two'}>{product.controller}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Charging Time</th>
                    <th className={'not two'}>{product.charging_time}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Brakes</th>
                    <th className={'not two'}>{product.brakes}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Capcity</th>
                    <th className={'not two'}>{product.capcity}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Suspention</th>
                    <th className={'not two'}>{product.suspention}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Steering</th>
                    <th className={'not two'}>{product.steering}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Load Range</th>
                    <th className={'not two'}>{product.load_range}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Battery</th>
                    <th className={'not two'}>{product.bettery}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Max Speed</th>
                    <th className={'not two'}>{product.max_speed}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Climbing Ability</th>
                    <th className={'not two'}>{product.climbing_ability}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Overall Dimentions</th>
                    <th className={'not two'}>{product.overall_dimentions}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Max Loading Weight</th>
                    <th className={'not two'}>{product.max_loading_weight}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Chassit</th>
                    <th className={'not two'}>{product.chassit}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Wheel Base</th>
                    <th className={'not two'}>{product.wheel_base}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Ground Clearance</th>
                    <th className={'not two'}>{product.ground_clearance}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Front Teal Wheel</th>
                    <th className={'not two'}>{product.front_teal_wheel}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Tires</th>
                    <th className={'not two'}>{product.tires}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Gross Weight</th>
                    <th className={'not two'}>{product.gross_weight}</th>
                </tr>
                <tr>
                    <th className={'special one'}>QPC </th>
                    <th className={'not two'}>{product.qpc}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Size Of Board</th>
                    <th className={'not two'}>{product.size_of_board}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Size Of Wheel</th>
                    <th className={'not two'}>{product.size_of_wheel}</th>
                </tr>
                <tr>
                    <th className={'special one'}>Windsheild</th>
                    <th className={'not two'}>{product.windsheild}</th>
                </tr>

            </table>
        </div>
    );
}