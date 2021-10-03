import * as React from 'react';
import './components.css'

export default function Header() {
    return (
        <div className="header-container">
            <img src="/Images/logo.png" alt="logo" style={{width:130, height:130}} />
            <div id="brand-name">D.I.A.N.A</div>
        </div>
    );
  }