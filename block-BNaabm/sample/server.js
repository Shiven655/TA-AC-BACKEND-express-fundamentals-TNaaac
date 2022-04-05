var express = require('express');

var app = express();

function logger(req, res, next) {
  console.log(req.method, req.url);
  next();
}
app.use(logger);

app.get('/', (req, res) => {
  res.send('Welcome to middleware server');
});

app.listen(4000, () => {
  console.log('server is listnning on 4k');
});
