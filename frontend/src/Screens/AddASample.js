import {useState} from 'react';
import './screens.css'
import { withRouter } from "react-router-dom";
import {Button} from '@material-ui/core';

// Importing Components
import HeaderCenter from '../Components/HeaderCenter';


export default function AddASample(){


    const [type, setType] = useState("Photo");


        return (
            <div className="sample-container">
                <HeaderCenter />
                <input type="text" id="name-input" placeholder="Sample Title"/>
                <input type="text" id="name-input" placeholder="Sample Discription"/>
                <select name="type" id="type-input" onChange={e => setType(e.target.value)}>
                    <option value="Photo">Photo</option>
                    <option value="Audio">Audio</option>
                    <option value="Video">Video</option>
                </select>
                <input type="file" id="file-input" name="file" placeholder="FILE" />
                <div style={{color:"#ffffff"}}>Upload</div>
            </div>
        );

}



