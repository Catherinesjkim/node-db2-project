const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(port, () => 
  console.log(`\n ** Running on port ${port}... **\n`));

// to run the server use: node index.js
// npm start