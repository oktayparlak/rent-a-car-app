const { Pool } = require('pg');
const env = require('dotenv');

env.config();

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

const query = (text, params) => pool.query(text, params);

module.exports = {
  query,
};

// exports.connectDb = async () => {
//   try {
//     const client = new Client({
//       user: process.env.PGUSER,
//       host: process.env.PGHOST,
//       database: process.env.PGDATABASE,
//       password: process.env.PGPASSWORD,
//       port: process.env.PGPORT,
//     });

//     await client.connect();
//     console.log('Connected to database!');
//     //await client.end();
//   } catch (error) {
//     console.log(error);
//   }
// };
