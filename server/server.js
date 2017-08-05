var express = require('express');
var db = require('../db/config.js');
var app = express();

app.use(express.static('../public'));

app.get('/new-quote', function(req, res) {
  // console.log('GET request made');
  res.send('You attempted to GET a quote!');
})

app.post('/save-quote', function(req, res) {
  res.send('You got a POST from Pep Me');
})

app.listen(3000, function() {
  console.log('PepMe is listening on 3000')
});