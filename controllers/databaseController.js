const { Client } = require('pg');

exports.connectDb = async () => {
  try {
    const client = new Client({
      user: "postgres",//process.env.PGUSER,
      host: "localhost",//process.env.PGHOST,
      database: "rentACarJs",//process.env.PGDATABASE,
      password: "12345",//process.env.PGPASSWORD,
      port: 5432//process.env.PGPORT,
    });

    await client.connect();
    //const res = await client.query('SELECT * FROM some_table');
    console.log('Database connected!');
    //console.log(res);
    await client.end();
  } catch (error) {
    console.log(error);
  }
};
