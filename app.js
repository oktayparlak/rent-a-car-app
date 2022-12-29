const express = require('express');
const bodyparser = require('body-parser');

const pageRoute = require('./routes/pageRoute');
const database = require('./controllers/databaseController');
const carController = require('./controllers/carController');

const app = express();

const port = process.env.port || 8081;

/**Connect DB */
database.connectDb();

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));
app.use(bodyparser.json());
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);

/**Routes */
app.use('/', pageRoute);
app.get('/cars', carController.getAllCars);
app.get('/car-single', carController.getACar);


app.listen(port, () => {
  console.log(`App started on port http://localhost:${port}`);
});
