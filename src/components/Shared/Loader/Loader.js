import React from "react";
import './Loader.scss';

export default function Loader() {
    return(
      <div id={'loader'}>
          <img src={'logo.png'} alt={''} />
          <h1 className="display-1">Life Golf</h1>
      </div>
    );
}
