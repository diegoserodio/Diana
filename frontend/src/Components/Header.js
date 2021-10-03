import * as React from 'react';
import './components.css'

export default function Header(props) {
    let {name, role, mission, netStatus} = props;
    return (
        <div className="header-container">
            <div style={{display:"flex", flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start', width:'30%', paddingRight:20}}>
                <img src="/Images/settings_white.png" alt="logo" style={{width:50, height:50}} />
            </div>
            <div style={{display:"flex", flexDirection:'row', alignItems:'center', width:'20%'}}>
                <img src="/Images/logo.png" alt="logo" style={{width:100, height:100}} />
                <div id="brand-name">D.I.A.N.A</div>
            </div>
            <div style={{color:'white', marginLeft:40, width:'10%'}}>
                <div>Mission: Apollo 13</div> 
                <div style={{display:'flex', flexDirection:'row'}}>Status: <div style={{color:'green', paddingLeft:5}}>Online</div></div> 
            </div>
            <div style={{display:"flex", flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end', width:'30%', paddingRight:20}}>
                <img src="/Images/user.png" alt="logo" style={{width:60, height:60}} />
                <div style={{color:'white', paddingLeft:20}}>
                    <div>User: {name}</div> 
                    <div>Role: {role}</div> 
                </div>
            </div>
        </div>
    );
  }