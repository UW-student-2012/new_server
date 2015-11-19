var Client = require('../models/client');


//POST : Create a Client
exports.create = function (req,res) {
	var instanceOfClient = new Client(req.body);

	Client.count({username : instanceOfClient.username}, function(err, count){
		if(err){
			res.json({
				status: 'fail',
				data: err
			});
		}
		else {
			if(count > 0 ){
				res.json({
					status: 'fail',
					data: 'username already exists'
				});
			}
			else {
				instanceOfClient.save(function(err, result){
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
		}
	});
}

//GET : Get a Client by Object Id
exports.get = function (req, res) {
	var id = req.params.id;
	if(id){
		Client.findOne({_id:id}).exec(function(err, result){ //grab specific client
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
	else {
		Client.find({isActive : true}).exec(function(err,result){ //grab all client
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
		})
	}
}

