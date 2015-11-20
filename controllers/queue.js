var Queue = require('../models/queue');
var Duration = require('../models/duration');



//POST : Create a Queue
exports.create = function (req,res){
	var instanceOfQueue = new Queue(req.body);

	// Queue,count({client : instanceOfQueue.client.id, duration : instanceOfQueue.duration.id},function(err, count){
	// 	if(err){
	// 		res.json({
	// 			status: 'fail',
	// 			data: err
	// 		});
	// 	}
	// 	else {
	// 		if(count > 0){
	// 			res.json({
	// 				status: 'fail',
	// 				data: 'the queue already exists'
	// 			});
	// 		}
	// 		else {
				instanceOfQueue.save(function(err, result){
					if(err){
						res.json({
							status: 'fail',
							data: err
						});
					}
					else {
						res.json({
							status: 'success',
							messages: result
						});	
					}
				});
	// 		}
	// 	}
	// });
}

//TODO : Get Queues under Client 
exports.get = function(req,res){
	var id = req.params.id;
	Queue.find({_id:id}).populate('client').populate('duration').exec(function(err, result){
		if(err){
				res.json({
					status: 'fail',
					data: err
				});
			}
			else {
				res.json({
					status: 'success',
					messages: result
				});	
			}
	});
}

  


//TODO : GET Queue by Object id 





//POST : Create a Duration
exports.createDuration = function (req,res) {
	var instanceOfDuration = new Duration(req.body);

	//TODO : Check status
	instanceOfDuration.save(function(err, result){
					if(err){
						res.json({
							status: 'fail',
							data: err
						});
					}
					else {
						res.json({
							status: 'success',
							messages: result
						});	
					}
				});
}

//GET : Get all Durations
exports.getDurations = function(req,res){

	//TODO : Check status
	Duration.find({isActive : true}).exec(function(err,result){ 
			if(err){
				res.json({
					status: 'fail',
					data: err
				});
			}
			else {
				res.json({
					status: 'success',
					messages: result
				});	
			}
		});
}



