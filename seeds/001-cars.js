// when I don't have a db yet - only for development, never in production
// migration - best way to maintain the data
// 1. define our test data
exports.seed = async function(knex) {

  const testData = [
    { vin: '3C3FFBR6DT612002', make: 'Fiat', model: '500', mileage: '30,000', transmission: 'auto', status: 'clean' },
    { vin: '3C3FFBR6DT612003', make: 'Toyota', model: 'Camry', mileage: '40,000', transmission: 'manual', status: 'salvage' },
    { vin: '3C3FFBR6DT612004', make: 'Honda', model: 'Civic', mileage: '50,000', transmission: 'auto', status: '' },
  ]
  
  // 2. Clean up, reset the id by calling truncate
  // Truncate: Deletes ALL existing entries and reset the id back to 1 - it does both
  // property of the db, it will never create the same id
  await knex('cars').truncate();
    // Inserts seed entries
  return knex('cars').insert(testData); // insert with this data
};

// 3. run with knex seed:run 

