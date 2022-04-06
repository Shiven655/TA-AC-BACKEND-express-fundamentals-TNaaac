var express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.sendfile(__dirname + '/index.html');
});

app.get('/new', (req, res) => {
  res.sendfile(__dirname + '/new.html');
});

app.post('/new', (req, res) => {
  res.sendfile(req.body);
});

app.get('/users/asdf', (req, res) => {
  let username = req.params.asdf;
  res.send = username;
});

app.listen(3000, () => {
  console.log('Server is listning on 3k');
});
