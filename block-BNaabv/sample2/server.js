var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var app = express();
//middlewares
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use((req, res, next) => {
  res.cookie('username', 'xyz');
  next();
});
app.use('/admin', (req, res, next) => {
  next('unauthoursed user');
});
//routes
app.get('/', (req, res) => {
  res.send('<h2>WELCOME TO EXPRESS</h2>');
});
app.get('/about', (req, res) => {
  res.send('my name is qwerty');
});
app.post('/form', (req, res) => {
  res.json(req.body);
});
app.post('/json', (req, res) => {
  res.json(req.body);
});
app.get('users/:username', (req, res) => {
  var username = req.params.username;
  res.send(`<h2>${username}</h2>`);
});
//404 error
app.use((req, res, next) => {
  res.send('page not found');
});
//custom error
app.use((err, req, res, next) => {
  res.send(err);
});
app.listen(4000, () => {
  console.log('server is listening on port:4000');
});
