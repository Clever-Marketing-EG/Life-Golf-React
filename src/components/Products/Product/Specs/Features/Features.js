import React from 'react';
import './Features.scss';
export default function Features( {data} ) {
    return (
        <div id={'features'}>
            <ul className={'features-list'}>
                <li className={'features-list-item'}>
                    <div className={'small-circle'}/>
                    {data.features}
                </li>
            </ul>
        </div>
    );
}
