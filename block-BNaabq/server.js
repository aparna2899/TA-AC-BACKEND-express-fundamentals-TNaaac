var express = require('express');
var logger = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(logger('dev'));

app.use(cookieparser());

app.use((req, res, next) => {
  console.log(req.cookies);
  next();
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'aparna');
  res.end('Welcome to About Page!');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
