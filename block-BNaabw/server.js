var express = require('express');
var logger = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

//middlewares

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/public'));

app.use(logger('dev'));

app.use(cookieparser());

app.use((req, res, next) => {
  res.cookie('usename', 'aparna');
  next();
});

//routes

app.get('/', (req, res) => {
  console.log('hrloooooooooooooo');
  console.log(__dirname);
  res.sendFile(__dirname + '/index.html');
});

app.get('/gallery', (req, res) => {
  res.sendFile(__dirname + '/gallery.html');
});

//handling error

app.use((req, res, next) => {
  res.send('Page Not Found!');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(4000, () => {
  console.log('server is listening on port 4000');
});
