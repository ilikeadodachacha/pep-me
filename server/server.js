var express = require('express');
var quotes = require('../db/config.js');
var app = express();
var bodyParser = require('body-parser');

app.listen(3000, function() {
  console.log('PepMe is listening on 3000')
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('../public'));

app.get('/quotes', function(req, res) {
  quotes.find().exec(function(err, data) {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  })
});

app.post('/save-quote', function(req, res) {
  var newQuote = new quotes({quote: req.body.quote});
  newQuote.save(function(err, newQuote) {
    if (err) {
      res.send(err);
    } else {
      res.send(newQuote);
    }
  })
});
