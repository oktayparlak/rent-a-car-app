const express = require('express');
const ejs = require('ejs');

const pageController = require('./controllers/pageController');
const carController = require('./controllers/carController');

const app = express();

const port = process.env.port || 8081;

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));

/**pages */
app.get('/', pageController.getIndexPage);
app.get('/about', pageController.getAboutPage);
app.get('/service', pageController.getServicePage);
app.get('/pricing', pageController.getPricePage);
app.get('/cars', carController.getAllCars);
app.get('/contact', pageController.getContactPage);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
