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
                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                    <div className = "help-form2">
                        <Header />
                        <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >HOME PAGE</Button></Link>
                    </div>
                    <div style = {{display:"flex", flexDirection:'row', alignItems:'center', width: '100%', justifyContent: 'center'}}>
                        <div style = {{display: "flex", flexDirection: 'column', alignItems:'center'}}>
                            {/* <div className = "peers-box-main-title"> */}
                                {/* <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}> */}
                                    <div style={{color:"#fff"}}>LAST UPDATED</div>
                                {/* </div> */}
                            {/* </div> */}
                            <div className = "peers-box-main">
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style = {{display:"flex", flexDirection:'row', alignItems:'center'}}>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
                                                <img src="\Images\step_print.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="normal" style={{marginTop:20, marginBottom:20}} >NEIL ARMSTRONG</Button></Link>
                                            </div>
                                        </div>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center',width:"100%",justifyContent: "center"}}>
                                                <img src="\Images\motor_test.jpg" alt="motor-test" style={{width:250,borderRadius: "20px", marginTop:"15px"}} />
                                                <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="normal" style={{marginTop:20, marginBottom:20}} >MARY JACKSON</Button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style = {{display:"flex", flexDirection:'row', alignItems:'center'}}>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center',width:"100%",justifyContent: "center"}}>
                                                <img src="\Images\speaker.png" alt="audio" style={{width:100,borderRadius: "20px", marginTop:"70px"}} />
                                                <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="normal" style={{marginTop:20, marginBottom:20}} >CHARLES DUKE</Button></Link>
                                            </div>
                                        </div>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: "column", alignItems: 'center',width:"100%",justifyContent: "center"}}>
                                                <img src="\Images\document.png" alt="document" style={{width:100,borderRadius: "20px", marginTop:"70px"}} />
                                                <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="normal" style={{marginTop:20, marginBottom:20}} >KATHERINE JOHSON</Button></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                            {/* <div className = "peers-box-secondary-title"> */}
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style={{color:"#fff"}}>FIELD TEAM</div>
                                </div>
                            {/* </div> */}
                            <div className = "peers-box-secondary">
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >NEIL ARMSTRONG - COLLECTING DATA</Button></Link>
                                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >CHARLES DUKE - COLLECTING DATA</Button></Link>
                                </div>
                            </div>
                            {/* <div className = "peers-box-secondary-title"> */}
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style={{color:"#fff",marginTop: "40px"}}>REMOTE TEAM</div>
                                </div>
                            {/* </div> */}
                            <div className = "peers-box-secondary">
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >KATHERINE JOHNSON - TRAJECTORY</Button></Link>
                                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >DOROTHY VAUGHAN - ANALYSIS</Button></Link>
                                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >DANIEL TANI - VITAL DATA</Button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(ThxPage);