const db = require('../data/db-config.js');

module.exports = {
  find, 
  add, 
};

function find() {
  return db('cars');
}

function add(car) {
  return db('cars')
    .insert(car, 'id')
    .then(([id]) => findById(id));
}

function findById(id) {
  return db('cars')
    .where({ id })
    .first();
}