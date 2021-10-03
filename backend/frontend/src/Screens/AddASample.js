import {useState, useEffect} from 'react';
import './screens.css'
import { withRouter, useLocation } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Components
import Header from '../Components/Header';
import { getUserByLogin, appendSample, appendLog } from '../Utils/API';
import { getTimestamp } from '../Utils/Math';


export default function AddASample(){
    const [type, setType] = useState("Photo");
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [user, setUser] = useState(null);
    let location = useLocation();

    useEffect(() => {
        if(!user)
            getUserData();
    })

    const getUserData = async() => {
        let {search} = location;
        // This was an unnecessary complicated error treatment
        // ...but I was procastinanting :D
        let login = search.substring(search.indexOf('=')+1, search.indexOf('&') === -1 ? search.length : search.indexOf('&'));
        let user = await getUserByLogin(login);
        setUser(user)
    }

    const handleChange = (event) => {
        setFile(URL.createObjectURL(event.target.files[0]))
    }

    const handleSubmitLog = async() => {
        let payload = {
            timestamp: getTimestamp(),
            author: user.name,
            logType: 'sample',
            message: description
        }
        console.log(payload);
        await appendLog(payload)
    }

    const handleSubmit = async() => {
        let payload = {
            timestamp: getTimestamp(),
            author: user.name,
            dataType: type,
            title: title,
            description: description,
            approved: false,
            atrributes: [],
            file: file
        }
        console.log(payload);
        await appendSample(payload);
        alert("Sample added")
    }

    if(!user)
        return null;
    return (
        <div className="sample-container">
            <Header name={user.name} role={user.role} />
            <input type="text" id="name-input" placeholder="Sample Title" style={{marginTop:50}} onChange={e => setTitle(e.target.value)} />
            <input type="text" id="name-input" placeholder="Sample Description" onChange={e => setDescription(e.target.value)} />
            <select name="type" id="type-input" onChange={e => setType(e.target.value)}>
                <option value="Photo">Photo</option>
                <option value="Audio">Audio</option>
                <option value="Video">Video</option>
            </select>
            <input type="file" id="file-input" name="file" placeholder="FILE" onChange={ (event) => handleChange(event) }/>
            <img src={file} alt="sample" style={{width:300}} />
            <Button variant="contained" size="large" style={{marginTop:20, marginBottom:20}} onClick={() => handleSubmitLog()}>SUBMIT</Button>
        </div>
    );

}