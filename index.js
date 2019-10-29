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
      res.json({ error: 'failed to get users from db' });
    });
});
