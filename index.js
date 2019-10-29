// Implement your API here

// import express
const express = require('express');

const db = '.data/db.js'; // creates the database

const server = express(); // creates a server

//GET the users
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      console.log('error', err);
      res.json({ error: 'The users information could not be retrieved' });
    });
});

// GET the users id
server.get('/api/users:id', (req, res) => {
  const id = req.params.id;

  db.find()
    .then(users => {
      res.json(id);
    })
    .catch(error => {
      console.log('error', err);
      res.json({ message: 'The user with the specified ID does not exist.' });
    });
});

//Port request
const port = 8000;
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));
