var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:123456@ds057234.mongolab.com:57234/server');
module.exports = mongoose.connection;