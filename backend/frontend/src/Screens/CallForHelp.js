import * as React from 'react';
import './screens.css'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';

class CallForHelp extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "main">
                <div style = {{display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'flex-start', height:'100vh', width:'100vw'}}>
                    <Header />
                    <div className = "help-box">
                        <div className = "help-form">
                            <div className = "help-form2">
                                <img src="\Images\warning-exclamation.png" alt="exclamation" style={{width:100}} />
                                <div className = "help-form">
                                    <div style={{color:"#ffffff"}}>DID YOU IDENTIFY A PROBLEM?</div>
                                    <input type="alert-description" id="alert-input" name="alert" placeholder="DESCRIBE IT HERE" />
                                </div>
                            </div>
                            <Link to='/thx-page' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >REPORT</Button></Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(CallForHelp);