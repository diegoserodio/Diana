import * as React from 'react';
import './screens.css'
import { withRouter } from "react-router-dom";
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';
import MenuItem from '../Components/MenuItem'

//Importing Components
import { getUserByLogin, appendLog, getLogs } from '../Utils/API';
import { getTimestamp } from '../Utils/Math';

class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            ipfs: null,
            orbitdb: null,
            user: null,
            login: null,
            openDialog: false,
            log: '',
            dumbLogs: [
                {
                    timestamp:'10-03-21 00:24:45',
                    author: 'Diego Serodio Costa',
                    logType: 'text',
                    message: 'Look this rock I have found!'
                },
                {
                    timestamp:'10-03-21 00:48:32',
                    author: 'Aeronauta',
                    logType: 'text',
                    message: 'YoUr MaMa :|'
                },
                {
                    timestamp:'10-03-21 01:02:25',
                    author: 'Amado',
                    logType: 'text',
                    message: 'Here is Uranus???'
                },
            ],
            intervalId: null,
            logsList: []
        }
    }

    async componentDidMount(){
        let {search} = this.props.location;
        // This was an unnecessary complicated error treatment
        // ...but I was procastinanting :D
        let login = search.substring(search.indexOf('=')+1, search.indexOf('&') === -1 ? search.length : search.indexOf('&'));
        var intervalId = setInterval(() => this.updateLogs(), 1000);
        this.setState({login:login, intervalId: intervalId}, () => this.getUserData())
    }

    componentWillUnmount(){
        // use intervalId from the state to clear the interval
        clearInterval(this.state.intervalId);
     }

    async updateLogs(){
        let {logsList} = this.state;
        logsList = await getLogs();
        logsList.reverse();
        this.setState({logsList:logsList})
        console.log("Logs list:", this.state.logsList)
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

    async getUserData(){
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
        let {user, logsList, dumbLogs} = this.state;
        if(!user)
            return null;
        return (
            <div className="home-container">
                <Header name={user.name} role={user.role} />
                <div className="content">
                    <div className="left-menu">
                        <div onClick={() => this.handleClickOpen()}><MenuItem displayName="Add a Sample"/></div>
                        <MenuItem displayName="Peers List" />
                        <MenuItem displayName="Call for Help" />
                    </div>
                    <div className="info">
                        <div className="middle-container">
                            <div className="content-div middle-div ">
                                MISSION LOGS
                                <div className="logs" style={{display:'flex', flexDirection:'column', justifyContent:'flex-end', paddingTop:10, paddingBottom:10, paddingLeft:3}}>
                                    {logsList.length>0 && logsList.map(log => 
                                        <div style={{color:'white', marginTop:5}}><b>{log.author}</b> | {log.timestamp} ==> {log.message}</div>
                                    )}
                                </div>
                            </div>
                            <div className="content-div right-div ">
                                FILE SYSTEM
                                <div className="logs">
                                </div>
                            </div>
                        </div>
                        <div className="location-container">
                            <div className="content-div middle-div ">
                                SOLAR FLARE MONITOR
                                <div className="logs"></div>
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
                                SOLAR FLARE MONITOR
                                <div className="logs"></div>
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
                    {"Did you find a good sample?"}
                    </DialogTitle>
                    <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Write your here your log about it
                    </DialogContentText>
                    <input type="text" name="log" placeholder="YOUR LOG" style={{border:'solid', borderColor:'black', color:'black', width:300}} onChange={e => this.setState({log:e.target.value})} />
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={() => this.handleClose()}>Cancel</Button>
                    <Button onClick={() => this.handleSubmitLog()} autoFocus>
                        Submit
                    </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withRouter(Home);

