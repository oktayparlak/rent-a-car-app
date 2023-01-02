const { Client } = require('pg');
const env = require('dotenv');

env.config();

exports.connectDb = async () => {
  try {
    const client = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: process.env.PGPORT,
    });

    await client.connect();
    console.log('Connected To Postgres Database!');
    await client.end();
  } catch (error) {
    console.log(error);
  }
};
