import {Component} from 'react';
import './screens.css'
import { Link, withRouter } from "react-router-dom";
import {Button, FormGroup, FormControlLabel, Checkbox} from '@material-ui/core';

// Importing Components
import { getUsers } from '../Utils/API';

class CreateMission extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:null
        }
    }

    async componentDidMount(){
        let users = await getUsers();
        console.log("Users:", users);
        this.setState({users:users})
    }

    render(){
        let {users} = this.state;
        if(!users)
            return null;
        return (
            <div className="main">
                <div className="forms-box d-flex align-items-center justify-content-center flex-column">
                    <div className="brand-container">
                        <img src="/Images/logo.png" alt="logo" style={{width:200}} />
                        <div id="brand-name">D.I.A.N.A</div>
                    </div>    
                    <input type="text" id="mission-input" name="mission" placeholder="MISSION NAME" />
                    <FormGroup>
                        {users.map(user => 
                            <FormControlLabel control={<Checkbox defaultChecked />} label={user.name} />
                        )}
                    </FormGroup>
                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >Create</Button></Link>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateMission);