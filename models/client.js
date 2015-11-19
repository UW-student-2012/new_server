var mongoose = require('mongoose');

var ClientSchema = new mongoose.Schema({
	username: {type: String, required: true },
	password: {type: String, required: true},
	name: {type: String, required: true },
	phone: {type: String, required: true},
	address: {type: String, required: true },
	city: {type: String, required: true },
	province: {type: String, required: true },
	isDelete : {type : Boolean, default : false },
	isActive : {type : Boolean, default : true },
	createDate : {type : Date, default : Date.now }
});

var Client = mongoose.model('Client', ClientSchema);

module.exports = Client;