import React from 'react';
import './Specifications.scss';
export default function Specifications({data}) {
    return (
        <div id={'specifications'} className={'specs-table'}>
            <table>
                <tr>
                    <img src={data.image_url}  alt={'...'}/>
                </tr>
            </table>
        </div>
    );
}
