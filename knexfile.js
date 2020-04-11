// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3", // db driver
    connection: {
      // could be an obj or string
      filename: "./data/cars.db3", // same level as package.json - only one dot
    },
    useNullAsDefault: true, // only needed for SQLite
  },
};

// sudo npm i -g knex
// knex init
// move the obj from connection.js into the development property on knexfil.js

// update connection.js to require knexfile and use the development property

// create a migration with knex migrate:make vegetables