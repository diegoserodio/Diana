import * as React from 'react';
import './screens.css'
import { withRouter, Link } from "react-router-dom";
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem'

//Importing Components
import { getUserByLogin, appendLog, getLogs } from '../Utils/API';
import { getTimestamp } from '../Utils/Math';

import CanvasJSReact from '../canvasjs.react';
let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ipfs: null,
            orbitdb: null,
            user: null,
            usersList: ["NEIL ARMSTRONG", "CHARLES DUKE", "KATHERINE JOHNSON", "DOROTHY VAUGHAN", "DANIEL TANI"],
            login: null,
            openDialog: false,
            log: '',
            intervalId: null,
            logsList: [],
            filterName: null,
            options: {
                animationEnabled: true,
                        exportEnabled: true,
                        theme: "dark2", // "light1", "dark1", "dark2"
                title: {
                    text: null
                },
                axisY: {
                            title: "Radiation",
                        },
                        axisX: {
                            title: null,
                            prefix: "",
                            interval: 1
                        },
                data: [{
                            type: "line",
                            toolTipContent: "Radiation {label}: {y}%",
                            dataPoints: [
                                { x: new Date(2024, 0, 1), y: 50 },
                                { x: new Date(2024, 1, 1), y: 14 },
                                { x: new Date(2024, 2, 1), y: 20 },
                                { x: new Date(2024, 3, 1), y: 60 },
                                { x: new Date(2024, 4, 1), y: 50 },
                                { x: new Date(2024, 5, 1), y: 100 },
                                { x: new Date(2024, 6, 1), y: 80 },
                                { x: new Date(2024, 7, 1), y: 85 },
                                { x: new Date(2024, 8, 1), y: 10 },
                                { x: new Date(2024, 9, 1), y: 100 },
                                { x: new Date(2024, 10, 1), y: 80 },
                                { x: new Date(2024, 11, 1), y: 100 }
                            ]
                        }]
            }
        }
    }

    async componentDidMount(){
        let {search} = this.props.location;
        // This was an unnecessary complicated error treatment
        // ...but I was procastinanting :D
        let login = search.substring(search.indexOf('=')+1, search.indexOf('&') === -1 ? search.length : search.indexOf('&'));
        var intervalId = setInterval(() => this.updateLogs(), 1000);
        this.setState({login:login, intervalId: intervalId}, () => this.getData())
    }

    componentWillUnmount(){
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
     }

    async updateLogs(){
        let {logsList, filterName} = this.state;
        logsList = await getLogs();
        //logsList.reverse();
        //logsList = logsList.sort((a, b) => b.sort === undefined ? 0 : b.sort - a.sort === undefined ? 0 : a.sort);
        console.log("Logs list:", logsList)
        if(filterName){
            logsList = logsList.filter(log => log.author === filterName)
            this.setState({logsList:logsList})
        }
        else{
            let result = [];
            result.push(logsList[0])
            result.push(logsList.filter(log => log._id==="a5c032ed-0a18-4056-9ec3-a052c7f85b6e")[0])  
            if(result[0]._id===result[1]._id)
                result[1] = logsList[1]
            this.setState({logsList:result})
        }
    }

    async handleSubmitLog(){
        let {log, user} = this.state;
        let payload = {
            timestamp: getTimestamp(),
            author: user.name,
            logType: 'text',
            message: log
        }
        console.log(payload);
        await appendLog(payload)
        this.handleClose();
    }

    async getData(){
        let user = await getUserByLogin(this.state.login);
        this.setState({user:user})
    }

    handleClickOpen() {
        this.setState({openDialog:true})
    };

    handleClose() {
        this.setState({openDialog:false})
    };

    render(){
        let {user, logsList, usersList} = this.state;
        if(!user)
            return null;
        return (
            <div className="home-container">
                <Header name={user.name} role={user.role} />
                <div className="content">
                    <div className="left-menu">
                        <Link to={`/add-a-sample?login=${user.login}`} style={{textDecoration:'none'}}><MenuItem displayName="Add a Sample" path='Images/global.png' /></Link>
                        <Link to={`/peers-list?login=${user.login}`} style={{textDecoration:'none'}}><MenuItem displayName="Peers List" path='Images/friends.png' /></Link>
                        <Link to={`/call-for-help?login=${user.login}`} style={{textDecoration:'none'}}><MenuItem displayName="Call for Help" path='Images/warning_white.png' /></Link>
                    </div>
                    <div className="info">
                        <div className="middle-container">
                            <div className="content-div middle-div ">
                                <div style={{display:'flex', flexDirection:'row'}}>MISSION LOGS <div style={{cursor:'pointer', marginLeft:10}} onClick={() => this.handleClickOpen()}><b>Filters</b></div></div>
                                <div className="logs" style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', paddingTop:10, paddingBottom:10, paddingLeft:3, overflow:'hidden'}}>
                                    {logsList.length>0 && logsList.map(log => {
                                        if(log.logType === "text")
                                            return (
                                                <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingRight:10}}>
                                                    <div style={{color:'white', marginTop:5}}><b>{log.author}</b> | {log.timestamp} =={'>'} {log.message}</div>
                                                    <Button><b style={{color:'white', fontSize:12}}>approve</b></Button>
                                                </div>
                                            )
                                        else
                                            return (
                                                <div style={{display:'flex', flexDirection:'column'}}>
                                                    <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', paddingRight:10}}>
                                                        <div style={{color:'white', marginTop:5}}><b>{log.author}</b> | {log.timestamp} =={'>'} {log.message}</div>
                                                        <Button><b style={{color:'white', fontSize:12}}>approve</b></Button>
                                                    </div>
                                                    <img src="/Images/moon_sample_1.jpg" alt="sample" style={{width:150, height:100, borderRadius:20, marginLeft:50}} />
                                                </div>
                                            )
                                    })}
                                </div>
                            </div>
                            <div className="content-div right-div ">
                                MISSION'S CREW
                                <div className="logs" style={{display:'flex', flexDirection:'column'}}>
                                {usersList.map(user => (
                                    <div style={{display:'flex', width:'400px', justifyContent:'flex-start', paddingLeft:5, paddingTop:10, alignItems:'center'}}>
                                        <div style={{color:'white', width:'300px'}}>{user}</div>
                                    </div>
                                )
                                )}
                                </div>
                            </div>
                        </div>
                        <div className="location-container">
                            <div className="content-div middle-div ">
                                SOLAR FLARE MONITOR
                                <div className="logs" style={{height:410, borderRadius:0}}>
                                    <CanvasJSChart options = {this.state.options} style={{borderRadius:50}} />
                                </div>
                            </div>
                            <div className="content-div right-div ">
                                LOCATION
                                <div className="logs" id="location-box">
                                 <img src="/Images/moon-surface.jpg" alt="moon" style={{width:"100%", height:"265px", borderRadius:20}} />
                                </div>
                            </div>
                        </div>
                        <div className="sensors-container">
                            <div className="content-div whole-div ">
                                SYSTEMS HEALTH
                                <div className="logs" style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:'100%', height:'100%'}}>
                                    <div style={{color:'red', fontSize:30, display:'flex', flexDirection:'column'}}>
                                        <img src="Images/low-battery-level.png" alt="batt" style={{width:50, height:50}} />
                                        <div>20%</div>
                                    </div>
                                    <div style={{color:'cyan', fontSize:62, display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
                                        <img src="Images/cold.png" alt="batt" style={{width:50, height:50, marginRight:20}} />
                                        <div>-200ºC</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Dialog
                    open={this.state.openDialog}
                    onClose={() => this.handleClose()}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">
                    {"Logs Filters"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Filter you logs' view by:
                    </DialogContentText>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <input type="checkbox" value="Bike" style={{width:'30px'}}/>
                        <label for="vehicle1" style={{color:'black', width:'300px'}}>Your logs</label>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <input type="checkbox" value="Bike" style={{width:'30px'}}/>
                        <label for="vehicle1" style={{color:'black', width:'300px'}}>Approved logs</label>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <input type="checkbox" value="Bike" style={{width:'30px'}}/>
                        <label for="vehicle1" style={{color:'black', width:'300px'}}>Pending logs</label>
                    </div>
                    <div style={{display:'flex', flexDirection:'row', width:'100%', justifyContent:'center', alignItems:'center'}}>
                        <input type="checkbox" value="Bike" style={{width:'30px'}}/>
                        <label for="vehicle1" style={{color:'black', width:'300px'}}>Images</label>
                    </div>
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => this.handleClose()}>Cancel</Button>
                    <Button onClick={() => this.setState({filterName:'Diego'}, () => this.handleClose())} autoFocus>
                        Apply
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withRouter(Home);

