var express = require('express');
var cookieparser = require('cookie-parser');
var logger = require('morgan');
var app = express();

app.use(logger('dev'));
app.use(cookieparser);
app.use((req, res, next) => {
  console.log(req.cookies);
  let count = req.cookies.count;
  if (count) {
    res.cookie('count', Number(count) + 1);
  } else {
    res.cookie('count', 1);
  }
  next();
});

app.get('/', (req, res) => {
  res.send('Welcome to middleware server');
});

app.listen(3000, () => {
  console.log('Server is listning on 3k');
});
