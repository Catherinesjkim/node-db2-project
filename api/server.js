// Write endpoints to support CREATE and READ operations on the cars resource.
const express = require("express"); // npm i express
const carsRouter = require("../cars/car-router.js");
const mw = require('./middleware.js');
const logger = mw.logger;
const helmet = require('helmet');

const server = express();

server.use(helmet());
server.use(express.json()); 
server.use(logger);

server.get("/api", (req, res) => {
  const environment = process.env;
  res.status(200).json({ api: "up", environment });
});

//? The router handler - it handles the endpoints that begins with below URLs - Connection
server.use('/api/cars', carsRouter);

// Write a GET / endpoint that returns an obj - router handler
server.get('/', addName, (req, res) => {
  const nameInsert = (req.name) ? `${req.name}` : '';
  console.log('req.name is:', req.name);

  // will be treated as HTML string - res.send
  res.send(`
  <h2>Catherine's Second DB Project</h2>
  <p>Welcome ${nameInsert}, to the Catherine's Node DB 2 Module Challenge!</p>
  `);
});

// Doing sth similar to what express.js does
function addName(req, res, next) {
  req.name = 'WEBPT11';
  next();
};

// Catch all 404 error message - good UX
server.use(function (req, res, next) {
    res
      .status(404)
      .json({ message: "Oops, didn't find what you are looking for" })
    next();
  });


module.exports = server;