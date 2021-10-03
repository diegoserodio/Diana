import axios from 'axios';
const API_URL = process.env.NODE_ENV==='development' ? 'http://localhost:3030' : process.env.REACT_APP_BACKEND;

export async function getLogs(){
    return await axios.get(`${API_URL}/fetch-logs`)
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
        alert("Unable to reach the server :c");
    });
}

export async function appendLog(log){
    await axios.post(`${API_URL}/appendlog`, log)
    .then(response => {
        //alert("Log created Successfully")
    })
    .catch(error => {
        console.log(error);
        alert("Unable to reach the server :c");
    });
}

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

export async function signIn(user){
    return await axios.post(`${API_URL}/signin`, user)
    .then(response => {
        return response.status;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
}

export async function getUserByLogin(login){
    return await axios.post(`${API_URL}/get-user-by-login`, {login})
    .then(response => {
        return response.data;
    })
    .catch(error => {
        console.log(error);
        return false;
    });
}