writeCode

Q. Create a package.json file manually with

- name
- description
- version

```json
{
  "name": "assignment1",
  "description": "express fundamentals assignment1",
  "version": ""
}
```

Q. Create a package.json with using npm init script with above content

- add express package with exact version of 4.16.4

```js
npm i express@4.16.4
```

- upgrade it to the latest version

```js
npm i express@latest --save
```

Q. Create a basic express server with 2 routes

- add package.json
- install express
- setup an express server
- add a listener on port 3000
- handle these routes

  1. GET -> `/` with HTML response saying 'Welcome to express' in H2.
  2. GET -> `/about` with plain text content saying 'My name is qwerty'

```js
var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
```

Q. Modify above application, add appropriate middleware

- to capture form data from request
- to capture json data from request
- add POST request on `/form` route to capture form data from postman and send entire form data through response in json format
- add POST request on `/json` route to capture JSON data from postman and send entire data in response in plain text format.
- json and form data should include fields
- name
- age
- email

### Note:-

Remember to add middlewares before handling any routes.

```js
var express = require('express');

var app = express();

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
```

Q. Modify above application to include

- logger middleware
- cookieParser middleware
- add a middleware to send cookie to the client.

```js
var express = require('express');
var loggar = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(loggar('dev'));

app.use(cookieparser());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'aparna99');
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
```

Q. Modify above application to include

- a router to capture params from the request on a route `/users/:username` using GET request.
- capture the username and respond with username in HTML response.

```js
var express = require('express');
var loggar = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(loggar('dev'));

app.use(cookieparser());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/about', (req, res, next) => {
  res.cookie('username', 'aparna99');
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.setHeader('Content-type', 'text/html');
  res.send(`<h2>${username}</h2>`);
});

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
```

Q. Modify above to include error handler middleware

- a 404 handler for routes which are not handled
- a 500 handler for client/server error

```js
var express = require('express');
var loggar = require('morgan');
var cookieparser = require('cookie-parser');

var app = express();

app.use(loggar('dev'));

app.use(cookieparser());

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/admin', (req, res, next) => {
  next('Unauthorized User');
});

app.use('/about', (req, res, next) => {
  res.cookie('username', 'aparna99');
  next();
});

app.get('/', (req, res) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h2>Welcome to express</h2>');
});

app.get('/about', (req, res) => {
  res.send('My name is qwerty');
});

app.get('/users/:username', (req, res) => {
  var username = req.params.username;
  res.setHeader('Content-type', 'text/html');
  res.send(`<h2>${username}</h2>`);
});

app.post('/form', (req, res) => {
  res.send(req.body);
});

app.post('/json', (req, res) => {
  res.send(JSON.stringify(req.body));
});

app.use((req, res, next) => {
  res.setHeader('Content-type', 'text/html');
  res.send('<h2>Page Not Found! ☹️ </h2>');
});

app.use((err, req, res, next) => {
  res.send(err);
});

app.listen(3000, () => {
  console.log('server is listening on port 3000');
});
```

### Note:-

Remember to add error handler middlewares after handling all the routes in the application
