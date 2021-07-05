// 1.- As it is a module external to node.js we have to instantiate express
const express = require('express');
const morgan = require('morgan');
const app = express();

// REQUIRE ROUTES
const routes = require('./routes');
const routesApi = require('./routes-api');

// SETTINGS
app.set('appName', 'My first server');
app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');


// MIDDLEWARES - handle objects or information received from the browser

// This module shows in the console the requests that arrives into the server
app.use(morgan('combined'));
// app.use(function(req, res, next) {
//     console.log('request url: ' + req.url);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('Ha pasado por esta función');
//     next();
// })

// ROUTES
app.use(routes);
app.use('/api', routesApi);

app.get('*', (req, res) => {
    res.end('File not found');
});

app.listen(3000, function() {
    console.log('Server listening!')
    console.log('App name: ', app.get('appName'));
});