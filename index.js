require('dotenv').config();

const server = require('./api/server.js');
const port = process.env.PORT || 4000;

server.listen(4000, () => {
  console.log(`\n*** Server Running on Port ${port} ***\n`);
});

//when running locally the ip is taken care of by localhost and we can hardcode an port over 3000

//when deploying, heroku will assign an IP address, cant hardcode the port, heroku will assign it