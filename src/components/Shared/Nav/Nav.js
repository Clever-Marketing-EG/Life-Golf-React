import React from 'react';
import './Nav.scss';

export default function Nav() {

    return(
        <nav className="navbar navbar-dark navbar-expand-lg " id={'nav'}>
            <div className="container">
                <a className="navbar-brand" href="#">
                    <img src={'logo.png'} className={'nav-logo'}  alt={''}/>
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link active" aria-current="page" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/About">
                                About
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Products">
                                Products
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/News">
                                News
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Support">
                                Support
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/Contact">
                                Contact
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <i className="icon-sphere"/> Language
                            </a>
                            <ul
                                className="dropdown-menu bg-dark"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a className="nav-link" >
                                        English
                                    </a>
                                </li>
                                <li>
                                    <a className="nav-link">
                                        العربيه
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
