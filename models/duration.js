var mongoose = require('mongoose');

var DurationSchema = new mongoose.Schema({
	name: {type: String, required: true },
	startDate : {type : Date, default : Date.now },
	endDate : {type : Date, default : Date.now },
	isActive : {type : Boolean, default : true },
});

var Duration = mongoose.model('Duration', DurationSchema);

module.exports = Duration;