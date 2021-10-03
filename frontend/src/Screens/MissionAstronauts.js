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
                <div style={{display:"flex", flexDirection:'row', alignItems:'center', width: "100%", justifyContent: "space-around"}}>
                    <div className="mission-astro">SUGGESTED FILES</div>
                    <div className="mission-astro">CURRENT MISSIONS</div>
                </div>
                <div style={{display:"flex", flexDirection:'row', alignItems:'center', width: "100%", height: "100%", justifyContent: "space-around"}}>
                    <div style={{display:"flex", flexDirection: 'column', alignItems:'center', width: "100%", height: "100%", justifyContent: "space-around"}}>
                        <div style={{display:"flex", flexDirection:'row', alignItems:'center', width: "90%", height: "100%"}}className="mission-astro2">APOLLO 18
                        <div style={{display:"flex", flexDirection:'row', alignItems:'center', width: "100%", justifyContent: "space-around"}}>
                                <div className="mission-astro">APOLLO 11 - IMAGE</div>
                                <div className="mission-astro">ARTEMIS - VIDEO</div>
                        </div>
                        </div>
                            
                    </div>
                    <div style={{display:"flex", flexDirection: 'column', alignItems:'center', width: "100%", height: "100%", justifyContent: "space-around"}}>
                        <div style={{width: "90%"}}className="mission-astro2">APOLLO 18</div>
                        <div style={{width: "90%"}}className="mission-astro">PAST MISSIONS</div>
                        <div style={{width: "90%"}}className="mission-astro2">APOLLO 11</div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default withRouter(Home);

