var mongoose = require('mongoose');

var ApiSchema = new mongoose.Schema({
	category: {type: String, required: true },
	method : {type: String, required: true },
	url: {type: String, required: true },
	example: {type: String},
	descrption: {type: String, required: true },
	note: {type: String },
	isActive : {type : Boolean, default : true },
	createDate : {type : Date, default : Date.now },
	updateDate : {type : Date, default : Date.now }
	
});

var Api = mongoose.model('Api', ApiSchema);

module.exports = Api;