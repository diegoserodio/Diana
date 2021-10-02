import * as React from 'react';
import './screens.css'
import {Button} from '@material-ui/core';

export default function SignUp() {
    return (
        <div className="main">
            <div className="forms-box d-flex align-items-center justify-content-center flex-column">
                <div className="brand-container">
                    <img src="/Images/logo.png" alt="logo" style={{width:200}} />
                    <div id="brand-name">D.I.A.N.A</div>
                </div>    
                <input type="text" id="name-input" name="name" placeholder="NAME" />
                <input type="text" id="login-input" name="login" placeholder="LOGIN" />
                <input type="password" id="password-input" name="password" placeholder="PASSWORD" />
                <input type="text" id="role-input" name="role" placeholder="ROLE" />
                <Button variant="contained" size="large" style={{marginTop:20}} >SIGN UP</Button>
            </div>
        </div>
    );
  }