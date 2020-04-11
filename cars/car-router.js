//? Using knex migrations, design and write a schema for the cars table using the specifications below.
//? Configure knex to connect to a /data/car-dealer.db3 database using the sqlite3 npm module.
//? Write endpoints to support CREATE and READ operations on the cars resource 
//? Use a rest client like Insomnia to test your API
const express = require("express");
// install knex and sqlite3

const Cars = require("../cars/cars-model.js");

// db access using knex
const db = require("../data/db-config.js"); // connection to the db

const router = express.Router();

// READ 
router.get("/cars", (req, res) => {
 // get the data from the db
  // select * from cars;
  db.select('*')
    .from('cars')
    .then(rows => {
      res.status(200).json({ data: rows });
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

// READ
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db('cars')
    .where({ id })
    .car()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
});

// CREATE
router.post("/", (req, res) => {
  db("cars")
    .insert(req.body, "id") //? second argument for postgres and other dbs except sqlite3
    .then(ids => {
      res.status(201).json({ results: ids });
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to store data" });
    });
});


module.exports = router;

