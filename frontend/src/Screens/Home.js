import * as React from 'react';
import './screens.css'
import { withRouter } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';

class Home extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="home-container">
                <Header />
            </div>
        );
    }
}

export default withRouter(Home);

