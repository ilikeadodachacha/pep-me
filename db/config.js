var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('db connected!')
});

var quoteList = mongoose.Schema({
  quote: {type: String}
})

var quotes = mongoose.model('quotes', quoteList)

module.exports = quotes;
