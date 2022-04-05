var express = require('express');

var app = express();

app.use(req, res, next);
{
  console.log(req.method, req.url);
  next();
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + 'public'));

app.get('/', (req, res) => {
  res.send('welcome to diffrent middlewares in express');
});

app.post('/json', (req, res) => {
  res.send(req.body);
  console.log(req.body);
});
app.post('/contact', (req, res) => {
  res.send(req.body);
  console.log(req.body);
});

app.listen(3000, () => {
  console.log('server is listning on 3k');
});
