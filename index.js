// implement your API here
const express = require('express');

const Hubs = require('./data/db');

const server = express();

const PORT = 5000;
server.listen('PORT', () => console.log('Localhost5000 is up and running'));
