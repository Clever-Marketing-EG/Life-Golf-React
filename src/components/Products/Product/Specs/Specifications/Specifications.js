import React from 'react';
import './Specifications.scss';
export default function Specifications({data}) {
    return (
        <div id={'specifications'} className={'specs-table'}>
            <div>
                <img src={data}  alt={'...'}/>
            </div>
        </div>
    );
}
