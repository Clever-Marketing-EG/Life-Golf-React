import React from 'react';
import './Header.scss';
import Nav from "../Nav/Nav";


export default function Header({title}) {
    return(
        <div id={'header'}>
            <Nav />
            <h1 className={'title top-50 start-50 translate-middle'}>{title}</h1>
        </div>
    )
}
