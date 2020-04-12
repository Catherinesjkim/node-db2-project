// this file knows how to connect to my db
const knex = require('knex');

const config = require('../knexfile.js');

module.exports = knex(config.development);