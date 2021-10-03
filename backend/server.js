'use strict';

const cors = require('cors');
const path = require('path');
const express = require('express');
const { v4: uuidv4 } = require('uuid');
const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// -------------- CONFIGURING IPFS DATABASE --------------

const ipfsOptions = {
    repo : './ipfs'
}

let ipfs = null;
let orbitdb = null;

const main = async() => {
    try {
        ipfs = await IPFS.create(ipfsOptions)            
        orbitdb = await OrbitDB.createInstance(ipfs)
    } catch (error) {
        console.trace(error)
    }
}

main();

const signIn = async(user) => {
    console.log("Authenticating user...");
    try {
        const db = await orbitdb.docs('users')
        await db.load();
        let authenticated = "User not found"; 
        db.get('').map(storedUser => {
            if(storedUser.login === user.login && storedUser.password === user.password)
                authenticated = "User authenticated"
        });
        console.log(authenticated);
        return authenticated 
    } catch (error) {
        console.trace(error)
        return error
    }
}

const getLogs = async() => {
    console.log("Getting all the logs...");
    try {
        const db = await orbitdb.docs('missionlogs')
        await db.load();
        console.log("All logs fetched:", db.get(''));
        return db.get('')
    } catch (error) {
        console.trace(error)
        return error
    }
}

const appendLog = async(log) => {
    console.log("Appending new log...");
    try {
        log._id = uuidv4();
        const db = await orbitdb.docs('missionlogs')
        await db.load();
        db.get('').map(async(entry) => await db.put(entry))
        await db.put(log)
        console.log("Log added successfully :D:")
        return db.get('')
    } catch (error) {
        console.trace(error)
        return error
    }
}

const getUserByLogin = async(req) => {
    console.log("Finding user..");
    try {
        const db = await orbitdb.docs('users')
        await db.load();
        let match = null; 
        db.get('').map(storedUser => {
            console.log(storedUser)
            if(storedUser.login === req.login)
                match = storedUser
        });
        console.log("Found user:", match);
        return match
    } catch (error) {
        console.trace(error)
        return error
    }
}

const getUsers = async() => {
    console.log("Getting all the users...");
    try {
        const db = await orbitdb.docs('users')
        await db.load();
        console.log("All users fetched:", db.get(''));
        return db.get('')
    } catch (error) {
        console.trace(error)
        return error
    }
}

const createUser = async(user) => {
    console.log("Creating a new user...");
    try {
        user._id = uuidv4();
        const db = await orbitdb.docs('users')
        await db.load();
        db.get('').map(async(entry) => await db.put(entry))
        await db.put(user)
        console.log("User added successfully :D")
        return "User added successfully"
    } catch (error) {
        console.trace(error)
        return error
    }
}

// -------------- CONFIGURING API --------------

const app = express();
app.use(express.json());
app.use(cors());
const publicPath = path.join(__dirname, '../frontend/build');
const port = process.env.PORT || 3030;
app.use(express.static(publicPath));

// -------------- API ENDPOINTS --------------
app.get('/fetch-users', async function (req, res) {
    const result = await getUsers();
    return res.send(result);
});
app.get('/fetch-logs', async function (req, res) {
    const result = await getLogs();
    return res.send(result);
});
app.post('/appendlog', async function (req, res) {
    const result = await appendLog(req.body);
    return res.send(result);
});
app.post('/get-user-by-login', async function (req, res) {
    const result = await getUserByLogin(req.body);
    if(result) return res.status(200).send(result);
    else return res.status(401).send(result);
});
app.post('/signin', async function (req, res) {
    const result = await signIn(req.body);
    if(result==="User authenticated") return res.status(200).send(result);
    else return res.status(401).send(result);
});
app.post('/signup', async function (req, res) {
    const result = await createUser(req.body);
    return res.send(result);
});
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});