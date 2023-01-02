const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const pageRoute = require('./routes/pageRoute');
const carRoute = require('./routes/carRoute');

const database = require('./controllers/databaseController');
const { query } = require('./database');

const app = express();

const port = process.env.port || 8081;

/**Connect DB */

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(cors());
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

/**Routes */
app.use('/', pageRoute);
app.use('/car', carRoute);

app.listen(port, () => {
  console.log(`App started on port http://localhost:${port}`);
});
