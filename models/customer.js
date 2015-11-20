var mongoose = require('mongoose');

var CustomerSchema = new mongoose.Schema({
	username: {type: String, required: true },
	password: {type: String, required: true},
	firstname: {type: String, required: true },
	lastname: {type: String, required: true },
	phone: {type: String, required: true},
	email: {type: String, required: true},
	address: {type: String, required: true },
	city: {type: String, required: true },
	province: {type: String, required: true },
	country: {type: String, required: true },
	isPopulate : {type : Boolean, default : false },
	isDelete : {type : Boolean, default : false },
	isActive : {type : Boolean, default : true },
	createDate : {type : Date, default : Date.now },
	updateDate : {type : Date, default : Date.now }
});

var Customer = mongoose.model('Customer', CustomerSchema);

module.exports = Customer;