const express = require('express');
const mongoose = require('mongoose');

const pageRoute = require('./routes/pageRoute');

const app = express();

const port = process.env.port || 8081;

/**Connect DB */
mongoose.connect('mongodb://localhost/rentacar-db').then(() => {
  console.log('DB Connection Successfuly');
});

/**Template Engine */
app.set('view engine', 'ejs');

/**Middlewares */
app.use(express.static('public'));

/**Routes */
app.use('/', pageRoute);

app.listen(port, () => {
  console.log(`App started on port ${port}`);
});
