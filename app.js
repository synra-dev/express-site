const express = require('express');
const routes = require('./routes');
const app = express();


//express.static('/public');
app.set('view engine', 'pug');

// set static folder for assets
app.use('/static', express.static('public/'));

// routing for the portfolio
app.use(routes);


// handle 404 error
app.use((req, res, next) => {
    const err = new Error('Page not found!');
    err.statusCode = 404;

    next(err);
});

// error handler middleware
app.use((err, req, res, next) => {
    res.status(err.statusCode || 500);
    console.log(`Error: ${err.statusCode} ${err.message}`);

    next();
});

app.listen(3000, () => {
    console.log('Server running on localhost:3000');
});