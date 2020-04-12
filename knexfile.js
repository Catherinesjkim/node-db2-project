// Update with your config settings.

module.exports = {

  development: {
    client: "sqlite3", // db driver
    connection: {
      // could be an obj or string
      filename: "./data/car-dealer.db3", // same level as package.json - only one dot
    },
    useNullAsDefault: true, // only needed for SQLite

    migrations: {
      directory: "./migrations"
    },
    seeds: {
      directory: "./seeds"
    }
  },

  // staging: {
  // },

  // production: {
  //   client: "postgresql", // db
    // connection: {
    //   database: "my_db" // process.env.PROD_DB || "my_db",
      // user: "username", // process.env.PROD_DB_USER || "username",
//       password: "password",
//     },
//     pool: {
//       mix: 2,
//       max: 10,
//     },
//     migrations: {
//       tableName: "knex_migrations", 
//     },
//   },
 };

// sudo npm i -g knex
// knex init
// move the obj from connection.js into the development property on knexfil.js

// update connection.js to require knexfile and use the development property

// create a migration with knex migrate:make vegetables

// change the db name inside knexfile.js

// run the migration with knex migrate:latest

