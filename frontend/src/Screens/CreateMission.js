import {Component} from 'react';
import './screens.css'
import { Link, withRouter } from "react-router-dom";
import {Button, FormGroup} from '@material-ui/core';

// Importing Components
import { getUsers } from '../Utils/API';

class CreateMission extends Component{
    constructor(props){
        super(props);
        this.state = {
            users:null,
            missionName:'',
            crew: []
        }
    }

    async componentDidMount(){
        let users = await getUsers();
        console.log("Users:", users);
        this.setState({users:users})
    }

    addToCrew(name){
        let {crew} = this.state;
        let found = false, result = [];
        crew.map(item => {
            if(item === name)
                found = true
            else
                result.push(item)
        })
        if(!found)
            result.push(name)
        this.setState({crew:result}, () => console.log(this.state.crew))
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
                    <input type="text" id="mission-input" name="mission" placeholder="MISSION NAME" onChange={e => this.setState({missionName:e.target.value})} />
                    <div style={{color:'white', marginTop:20, marginBottom:20}}><b>Who's in the crew?</b></div>
                    <FormGroup>
                        {users.map(user => (
                            <div style={{display:'flex', flexDirection:'row', width:'400px', justifyContent:'center', alignItems:'center'}}>
                                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" style={{width:'30px'}} onClick={() => this.addToCrew(user.name)} />
                                <label for="vehicle1" style={{color:'white', width:'300px'}}>{user.name}</label>
                            </div>
                        )
                        )}
                    </FormGroup>
                    <Link to='/home' style={{textDecoration:'none'}}><Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} >Create</Button></Link>
                </div>
            </div>
        );
    }
}

export default withRouter(CreateMission);