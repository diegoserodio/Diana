import * as React from 'react';
import './screens.css'
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core';

export default function SignIn() {
    return (
        <div className="main">
            <div className="forms-box d-flex align-items-center justify-content-center flex-column">
                <div className="brand-container">
                    <img src="/Images/logo.png" alt="logo" style={{width:200}} />
                    <div id="brand-name">D.I.A.N.A</div>
                </div>    
                <input type="text" id="login-input" name="login" placeholder="LOGIN" />
                <input type="password" id="password-input" name="password" placeholder="PASSWORD" />
                <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >SIGN IN</Button></Link>
                <div style={{color:"#ffffff"}}>Doesn't have an account yet? Click <Link to='/signup' style={{ textDecoration: 'none', color:'#ffffff' }}><u>here</u></Link> to create one!</div>
            </div>
        </div>
    );
  }