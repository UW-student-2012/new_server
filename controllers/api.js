var Api = require('../models/api');


//POST : Create a Api Example
exports.create = function (req,res) {
	var instanceOfApi = new Api(req.body);

	instanceOfApi.save(function(err, result){
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


//GET : Get a Api by Object Id
exports.get = function (req, res) {
	var id = req.params.id;
	if(id){
		Api.findOne({_id:id}).exec(function(err, result){ //grab specific api
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
		Api.find({isActive : true}).exec(function(err,result){ //grab all apis
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
