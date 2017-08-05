var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('db connected!')
});

var quoteList = mongoose.Schema({
  quote: String
})

// quotes list goes here



module.exports = db;
