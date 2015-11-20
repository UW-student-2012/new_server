var mongoose = require('mongoose');

var QueueSchema = new mongoose.Schema({
	client: {type: mongoose.Schema.ObjectId, ref : 'Client'},
	duration: {type: mongoose.Schema.ObjectId, ref : 'Duration'},
	date : {type : Date, default : Date.now, required: true },
	estimateMinutes : {type : Number, default : 0, required: true },
	numOfUser : {type : Number, default : 0, required: true },
	isActive : {type : Boolean, default : true },
	createDate : {type : Date, default : Date.now },
	updateDate : {type : Date, default : Date.now }
});

var Queue = mongoose.model('Queue', QueueSchema);

module.exports = Queue;