const express = require('express');
const ejs = require('ejs');

const pageController = require('./controllers/pageController');

const app = express();

const port = process.env.port || 8081;

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));

/**apis */
app.get('/', pageController.getAllCars);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
