var express = require('express');

var app = express();

app.use('/admin', (req, res, next) => {
  next('Unauthorized User');
});

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.get('/about', (req, res) => {
  res.send('Welcome to About Page!');
});

app.use((req, res, next) => {
  res.send('Page Not Found!');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
