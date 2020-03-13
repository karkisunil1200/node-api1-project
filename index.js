// implement your API here
const express = require('express');

const Hubs = require('./data/db');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.json({Gretting: 'Hello Wolrd'});
});

//get all the users
server.get('/api/users', (req, res) => {
  Hubs.find()
    .then(hubs => res.status(200).json(hubs))
    .catch(err => {
      console.log(err);
      res.status(500).json({errorMessage: 'Something went wrong'});
    });
});

//get the user by ID
server.get('/api/users/:id', (req, res) => {
  const {id} = req.params;
  Hubs.findById(id)
    .then(hubs => res.status(200).json(hubs))
    .catch(err => res.status(500).json({errorMessage: 'Something went wrong'}));
});

//post the user
server.post('/api/users', (req, res) => {
  const hubInfo = req.body;
  Hubs.insert(hub)
    .then(hubs => res.status(20).json(hub))
    .catch(err => res.status(500).json({errorMessage: 'Something went wrong'}));
});

//remove the user
server.delete('/api/users/:id', (req, res) => {
  const {id} = req.params;
  Hubs.remove(id)
    .then(removes => res.status(404).json(removes))
    .catch(err => {
      errorMessage: 'Something went wrong';
    });
});

//update the user
server.put('/api/users/:id', (req, res) => {
  const {id} = req.params;
  Hubs.update(id)
    .then(update => res.status(200).json(update))
    .error(err => {
      errorMessage: 'Something went wrong';
    });
});

const port = 5000;
server.listen(port, () => console.log(`Localhost:${port} is up and running :) `));
