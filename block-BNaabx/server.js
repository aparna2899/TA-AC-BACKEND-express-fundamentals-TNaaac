var express = require('express');

var app = express();

app.use((req, res, next) => {
  let curr_date = new Date();
  console.log(req.method, req.url, curr_date);
  next();
});

app.use((req, res, next) => {
  var store = '';
  req.on('data', (chunk) => {
    store = store + chunk;
  });
  req.on('end', () => {
    req.body = store;
    console.log(req.body);
  });
  next();
});

app.use('/images', (req, res, next) => {
  res.sendFile(__dirname + '/public/images' + req.url);
});

app.get('/', (req, res) => {
  res.send('Welcome!');
});

app.listen(4000, () => {
  console.log('server is listening on port 4000');
});
