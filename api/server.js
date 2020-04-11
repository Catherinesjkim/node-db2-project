// Write endpoints to support CREATE and READ operations on the cars resource.
const express = require("express"); // npm i express
const helmet = require('helmet');

const carsRouter = require("../cars/car-router.js");

const server = express();

server.use(helmet());
server.use(express.json()); 

server.use('/api/cars', carsRouter);

module.exports = server;