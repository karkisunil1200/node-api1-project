// implement your API here
const express = require('express');

const Hubs = require('./data/db');
const server = express();

server.get('/', (req, res) => {
  res.json({Gretting: 'Hello Wolrd'});
});

const port = 5000;
server.listen(port, () => console.log(`Localhost:${port} is up and running :) `));
