import axios from 'axios';
const API_URL = process.env.NODE_ENV==='development' ? 'http://localhost:3030' : process.env.REACT_APP_BACKEND;

export async function createUser(user){
    await axios.post(`${API_URL}/signup`, user)
    .then(response => {
        alert("User created Successfully")
    })
    .catch(error => {
        console.log(error);
        alert("Unable to reach the server :c");
    });
}

export async function getUsers(){
    return await axios.get(`${API_URL}/fetch-users`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
        alert("Unable to reach the server :c");
    });
}