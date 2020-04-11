const knex = require('knex');

const knexConfig = {
  client: "sqlite3", // db driver
  connection: {
    // could be an obj or string
    filename: "./data/car.db3", // same level as package.json - only one dot
  },
  useNullAsDefault: true, // only needed for SQLite
};

// db represents a live connection to the db
module.exports = knex(knexConfig);

