var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var app = express();

//middlewares
app.use(logger('dev'));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));
app.use(cookieParser);
app.use((req, res, next) => {
  res.cookie('username', 'xyz');
  next();
});

//routes
app.get('/', (req, res) => {
  res.send('<h2>WELCOME TO EXPRESS</h2>');
});
app.get('/uses', (req, res) => {
  res.send('User Page');
});

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});
app.get('/projects', (req, res) => {
  res.sendFile(__dirname + '/projects.html');
});
//404 error
app.use((req, res, next) => {
  res.send('page not found');
});

app.listen(4000, () => {
  console.log('Server is listning on 4k');
});
