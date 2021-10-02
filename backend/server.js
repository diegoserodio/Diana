'use strict';

const cors = require('cors');
const path = require('path');
const express = require('express');
const IPFS = require('ipfs')
const OrbitDB = require('orbit-db')

// -------------- CONFIGURING IPFS DATABASE --------------

// optional settings for the ipfs instance
const ipfsOptions = {
  EXPERIMENTAL: {
    pubsub: true
  }
}

 // Create IPFS instance with optional config
const ipfs = await IPFS.create(ipfsOptions)

 // Create OrbitDB instance
const orbitdb = await OrbitDB.createInstance(ipfs)

//create KV database
const db = await orbitdb.keyvalue('test-db')

// -------------- CONFIGURING API --------------

const app = express();
app.use(express.json());
app.use(cors());
const publicPath = path.join(__dirname, '../frontend/build');
const port = process.env.PORT || 3030;
app.use(express.static(publicPath));

// -------------- API ENDPOINTS --------------
app.get('*', (req, res) => {
   res.sendFile(path.join(publicPath, 'index.html'));
});
app.listen(port, () => {
   console.log(`Server is up on port ${port}!`);
});