import React from 'react';
import './Configurations.scss';
export default function Configurations({product}) {
    return (
        <div id={'configurations'}>
            <table>
            <tr>
                    <th className={'special one'}>Beverage Holder</th>
                    <th className={'not two'}>{product.beverage_holder}</th>
                </tr>
            <tr>
                    <th className={'special one'}>Dashboard</th>
                    <th className={'not two'}>{product.dashboard}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Light System</th>
                    <th className={'not two'}>{product.light_system}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Roaf</th>
                    <th className={'not two'}>{product.roaf}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Front Real Basket</th>
                    <th className={'not two'}>{product.front_real_basket}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Steering System</th>
                    <th className={'not two'}>{product.steering_system}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Wiper</th>
                    <th className={'not two'}>{product.wiper}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Real View Mirror</th>
                    <th className={'not two'}>{product.real_view_mirrir}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Speed Meter</th>
                    <th className={'not two'}>{product.speed_meter}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Armest</th>
                    <th className={'not two'}>{product.armest}</th>
            </tr>
            <tr>
                    <th className={'special one'}>Seats</th>
                    <th className={'not two'}>{product.seat}</th>
            </tr>
            </table>
        </div>
    );
}