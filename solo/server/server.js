// file to control what is served

const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

const controller = require('./controller.js');

app.use(express.json());

// handle requests for static files?

// route handlers
    // / route
    app.get('/', getTrails, (req, res) => {
      res.status(200).json();
    });

    // create
    app.post('/trails', createTrail, (req, res) => {
      res.status(200).json();
    });

    // read
    app.get('/trails', readTrail, (req, res) => {
        res.status(200).json();
      });

    // update
    app.push('/trails', updateTrail, (req, res) => {
      res.status(200).json();
    });

    // delete
    app.delete('/trails', deleteTrail, (req, res) => {
      res.status(200).json();
    });

    // catch-all route handler
    app.use((req, res) => res.status(404).send('Sorry, this page does not exist :(');

// global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObject = Object.assighn({}, defaultErr, err);
  console.log(errorObject.log);
  return res.status(errorObject.status).json(errorObject.message);
});

// start server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

// exort app?