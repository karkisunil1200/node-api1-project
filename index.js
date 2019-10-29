// Implement your API here

// import express
const express = require('express');

const db = '.data/db.js'; // creates the database

const server = express(); // creates a server

// middleware
server.use(express.json()); // teaches express how to read JSON

//GET the users
server.get('/api/users', (req, res) => {
  db.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      console.log('error', err);
      res.json({ error: 'The users information could not be retrieved' });
    });
});

// GET the users id
server.get('/api/users:id', (req, res) => {
  const id = req.params.id;

  db.findById()
    .then(users => {
      res.status(200).json(id);
    })
    .catch(error => {
      console.log('error', err);
      res
        .status(500)
        .json({ message: 'The user with the specified ID does not exist.' });
    });
});

// POST request
server.post('/api/users', (req, res) => {
  const usersInfo = req.body;

  console.log('User information', usersInfo);

  db.add(usersInfo)
    .then(users => {
      res.status(201).json(users);
    })
    .catch(err => {
      console.log('error', err);
      res
        .status(500)
        .json({ errorMessage: 'Please provide name and bio for the user.' });
    });
});
// DELETE request
server.delete('/api/users/:id', (req, res) => {
  const id = req.params.id;

  db.remove(id)
    .then(count => {
      res.status(200).json({ message: `User with id ${id} has been deleted` });
    })
    .catch(err => {
      console.log('error', err);
        res.status(404).json({ message: "The user with the specified ID does not exist."});
    });
});

//Port request
const port = 8000;
server.listen(port, () => console.log('\n=== API on port 8000 ===\n'));
