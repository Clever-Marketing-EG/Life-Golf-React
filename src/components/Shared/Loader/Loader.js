import React from "react";
import './Loader.scss';
import logo from './logo.png'
export default function Loader() {
    return(
      <div id={'loader'}>
          <img src={logo} alt={''} />
          <h1 className="display-1">Life Golf</h1>
          <div className="spinner-border text-light" role="status">
              <span className="visually-hidden">Loading...</span>
          </div>
      </div>
    );
}
