import * as React from 'react';
import './components.css'

export default function Header(props) {
    let {displayName, path} = props;
    return (
        <div className="button-container">
            <img src={path} alt="logo" style={{width:50, height:50, marginLeft:20, marginRight:20}} />
            <div className="menu-item-name">{displayName}</div>
        </div>
    );
  }