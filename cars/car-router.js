//? MVP
//? Using knex migrations, design and write a schema for the cars table using the specifications below.
//? Configure knex to connect to a /data/car-dealer.db3 database using the sqlite3 npm module.
//? Write endpoints to support CREATE and READ operations on the cars resource.
//? Use a rest client like Insomnia to test your API
const express = require("express");

// db access using knex
const db = require("../data/connection.js");

const router = express.Router();

// READ
router.get("/", (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve cars' });
    });
});

// READ
router.get("/:id", (req, res) => {
  const { id } = req.params;

  db('cars').where({ id }).car()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to retrieve car' });
    });
});

// CREATE
router.post("/", (req, res) => {
  const carData = req.body;
  db("cars")
    .insert(carData, "id")
    .then(ids => {
      db("cars")
        .where({ id: ids[0] })
        .then(newCarEntry => {
          res.status(201).json(newCarEntry);
        }); 
    })
    .catch(err => {
      console.log("POST error", err);
      res.status(500).json({ message: "Failed to store data" });
    });
});

module.exports = router;

