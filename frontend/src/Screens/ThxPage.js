import * as React from 'react';
import './screens.css'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';

class ThxPage extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className = "main">
                <div className = "help-box">
                <Header />
                    <div className = "help-form">
                        <div className = "help-form2">
                                <div style={{color:"#08709B"}}>THANK YOU FOR YOUR REPORT!</div>
                        </div>
                        <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >HOME PAGE</Button></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ThxPage);