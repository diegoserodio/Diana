import {useState} from 'react';
import './screens.css'
import { Link } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Utils
import { createUser } from '../Utils/API';

export default function SignUp() {
    const [name, setName] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("astronaut");

    const handleSubmit = async() => {
        let payload = {
            name: name,
            login: login,
            password: password,
            role: role
        }
        console.log("Payload:", payload);
        createUser(payload)
    }

    return (
        <div className="main">
            <div className="forms-box d-flex align-items-center justify-content-center flex-column">
                <div className="brand-container">
                    <img src="/Images/logo.png" alt="logo" style={{width:200}} />
                    <div id="brand-name">D.I.A.N.A</div>
                </div>    
                <input type="text" id="name-input1" name="name" placeholder="NAME" onChange={e => setName(e.target.value)} />
                <input type="text" id="login-input" name="login" placeholder="LOGIN" onChange={e => setLogin(e.target.value)} />
                <input type="password" id="password-input" name="password" placeholder="PASSWORD" onChange={e => setPassword(e.target.value)} />
                <select name="role" id="role" onChange={e => setRole(e.target.value)}>
                    <option value="astronaut">Astronaut</option>
                    <option value="guest">Guest</option>
                    <option value="mission-control">Mission Control</option>
                </select>
                <Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} onClick={() => handleSubmit()} >SIGN UP</Button>
                <div style={{color:"#ffffff"}}>Already have an account yet? Click <Link to='/' style={{ textDecoration: 'none', color:'#ffffff' }}><u>here</u></Link> to signin!</div>
            </div>
        </div>
    );
  }