import {useState} from 'react';
import './screens.css'
import { Link, Redirect, useHistory } from "react-router-dom";
import {Button, Alert} from '@material-ui/core';

// Importing Components
import { signIn } from '../Utils/API';

export default function SignIn() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [requestFailed, setRequestFailed] = useState(false);

    let history = useHistory();

    const handleSubmit = async() => {
        if(login === "" || password ===""){
            alert("Please, fill all the required fields")
            return;
        } else {
            let authenticated = await signIn({login:login, password:password})
            if(!authenticated)
                setRequestFailed(true)
            else
                history.push(`/home?login=${login}`)
        }
    }

    return (
        <div className="main">
            <div className="forms-box d-flex align-items-center justify-content-center flex-column">
                <div className="brand-container">
                    <img src="/Images/logo.png" alt="logo" style={{width:200}} />
                    <div id="brand-name">D.I.A.N.A</div>
                </div>
                {requestFailed && <Alert variant="filled" severity="error" style={{marginBottom:20}}>This is an error alert — check it out!</Alert>}    
                <input type="text" id="login-input" name="login" placeholder="LOGIN" onChange={e => setLogin(e.target.value)} />
                <input type="password" id="password-input" name="password" placeholder="PASSWORD" onChange={e => setPassword(e.target.value)} />
                <Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} onClick={() => handleSubmit()}>SIGN IN</Button>
                <div style={{color:"#ffffff"}}>Doesn't have an account yet? Click <Link to='/signup' style={{ textDecoration: 'none', color:'#ffffff' }}><u>here</u></Link> to create one!</div>
            </div>
        </div>
    );
  }