const knex = require('knex');

const knexfile = require('../knexfile.js');

const knexConfig = knexfile.development;

// db represents a live connection to the db
module.exports = knex(knexConfig);

