const express = require('express');
const dotenv = require('dotenv');
const pageRoute = require('./routes/pageRoute');
const database = require('./controllers/databaseController');

const app = express();

const port = process.env.port || 8081;

/**Connect DB */
database.connectDb();

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));
//dotenv.config();

/**Routes */
app.use('/', pageRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
