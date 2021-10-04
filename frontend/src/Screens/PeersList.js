import * as React from 'react';
import './screens.css'
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';
import { getUserByLogin, getSamples } from '../Utils/API';

class PeersList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: null,
            samples: null
        }
    }

    async componentDidMount(){
        let {search} = this.props.location;
        // This was an unnecessary complicated error treatment
        // ...but I was procastinanting :D
        let login = search.substring(search.indexOf('=')+1, search.indexOf('&') === -1 ? search.length : search.indexOf('&'));
        this.setState({login:login}, () => this.getData())
    }

    async getData(){
        let user = await getUserByLogin(this.state.login);
        let samples = await getSamples();
        console.log(samples)
        this.setState({user:user, samples:samples})
    }

    render(){
        let {user, samples} = this.state;
        samples=[]
        if(!user || !samples)
            return null;
        return (
            <div className = "main">
                <div style = {{display:"flex", flexDirection:'column', alignItems:'center', justifyContent:'flex-start', height:'100vh', width:'100vw'}}>
                    <Header name={user.name} role={user.role} />
                    <div style = {{display:"flex", flexDirection:'row', alignItems:'center', width: '100%', justifyContent: 'center', marginTop:50}}>
                        {samples.length > 3 ? (
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
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_1.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                <div style={{color:'white', marginTop:10}}><b>{samples[3].author}</b> | {samples[3].timestamp} | {samples[3].title}</div>
                                            </div>
                                        </div>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_2.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                <div style={{color:'white', marginTop:10}}><b>{samples[2].author}</b> | {samples[2].timestamp} | {samples[2].title}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style = {{display:"flex", flexDirection:'row', alignItems:'center'}}>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_3.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                <div style={{color:'white', marginTop:10}}><b>{samples[2].author}</b> | {samples[2].timestamp} | {samples[2].title}</div>
                                            </div>
                                        </div>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_4.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                <div style={{color:'white', marginTop:10}}><b>{samples[0].author}</b> | {samples[0].timestamp} | {samples[0].title}</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>) : (
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
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_1.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                {/* <div style={{color:'white', marginTop:10}}><b>{samples[3].author}</b> | {samples[3].timestamp} | {samples[3].title}</div> */}
                                            </div>
                                        </div>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_2.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                {/* <div style={{color:'white', marginTop:10}}><b>{samples[2].author}</b> | {samples[2].timestamp} | {samples[2].title}</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style = {{display:"flex", flexDirection:'row', alignItems:'center'}}>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_3.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                {/* <div style={{color:'white', marginTop:10}}><b>{samples[2].author}</b> | {samples[2].timestamp} | {samples[2].title}</div> */}
                                            </div>
                                        </div>
                                        <div className = "peers-box-file">
                                            <div style = {{display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent:'center', height:'100%', cursor:'pointer'}}>
                                                <img src="\Images\moon_sample_4.jpg" alt="step-print" style={{width:180,borderRadius: "20px", marginTop:"15px"}} />
                                                {/* <div style={{color:'white', marginTop:10}}><b>{samples[0].author}</b> | {samples[0].timestamp} | {samples[0].title}</div> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )}
                        <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                            {/* <div className = "peers-box-secondary-title"> */}
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style={{color:"#fff"}}>FIELD TEAM</div>
                                </div>
                            {/* </div> */}
                            <div className = "peers-box-secondary">
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'flex-start', marginTop:20}}>
                                    <div style={{color:'white', paddingLeft:10, cursor:'pointer'}}><b>NEIL ARMSTRONG</b> - COLLECTING DATA</div>
                                    <div style={{color:'white', paddingLeft:10, cursor:'pointer'}}><b>CHARLES DUKE</b> - COLLECTING DATA</div>
                                </div>
                            </div>
                            {/* <div className = "peers-box-secondary-title"> */}
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'center'}}>
                                    <div style={{color:"#fff",marginTop: "40px"}}>REMOTE TEAM</div>
                                </div>
                            {/* </div> */}
                            <div className = "peers-box-secondary">
                                <div style = {{display:"flex", flexDirection:'column', alignItems:'flex-start', marginTop:20}}>
                                    <div style={{color:'white', paddingLeft:10, cursor:'pointer'}}><b>KATHERINE JOHNSON</b> - TRAJECTORY</div>
                                    <div style={{color:'white', paddingLeft:10, cursor:'pointer'}}><b>DOROTHY VAUGHAN</b> - ANALYSIS</div>
                                    <div style={{color:'white', paddingLeft:10, cursor:'pointer'}}><b>DANIEL TANI</b> - VITAL DATA</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(PeersList);