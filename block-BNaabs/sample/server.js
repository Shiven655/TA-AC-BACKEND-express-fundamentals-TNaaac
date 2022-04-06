var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-Parser');

var app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//routes
app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendfile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.json(req.body);
});

app.get('/users/usename', (req, res) => {
  let username = req.params.username;
  res.send = username;
});

app.listen(3000, () => {
  console.log('Server is listning on 3k');
});
