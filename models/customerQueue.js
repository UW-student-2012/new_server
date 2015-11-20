var mongoose = require('mongoose');

var CustomerQueueSchema = new mongoose.Schema({
	customer: {type: mongoose.Schema.ObjectId, ref : 'Customer'},
	queue: {type: mongoose.Schema.ObjectId, ref : 'Queue'},
	notificationType {type: String, require : true},
	enterTime : {type : Date, default : Date.now },
	numBefore : {type : Number, default : 0},
	isReady : {type : Boolean, default : false },
	isActive : {type : Boolean, default : true },
	isMissed : {type : Boolean, default : false },
	createDate : {type : Date, default : Date.now },
	updateDate : {type : Date, default : Date.now }
});

var CustomerQueue = mongoose.model('CustomerQueue', CustomerQueueSchema);

module.exports = CustomerQueue;