// creating a table using knex
// "up" desceribes the changes that will be applied to the db
exports.up = function(knex) {
  // the change we want to make to our schema
  // create the cars table
  return knex.schema.createTable('cars', tbl => { 
    // remember to "return" the call to knex.schema
    // a primary key, named id, type integer, autoincrement
    tbl.increments(); // PK - method from knex

    tbl.string('vin', 17) // varchar
      .unique() // constraint - watchdog - chainable
      .index() // chainable
      .notNullable(); // chinable

    tbl.string('make', 255)
      .notNullable();

    tbl.string("model", 255)
      .notNullable();

    tbl.integer("mileage", 255)
      .notNullable();

    tbl.string("transmission", 255)
      .notNullable();

    tbl.varchar("status", 255);
  });
};

// "down" describes how to undo the changes from the up function
exports.down = function(knex) { // cmmd + z for the table structure
  // undoing that change
  // remove (drop) the cars table
  return knex.schema.dropTableIfExists('cars');
};
