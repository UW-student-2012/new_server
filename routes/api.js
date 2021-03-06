var express = require('express');
var router = express.Router();
var api = require('../controllers/api');
var client =require('../controllers/client');
var queue =require('../controllers/queue');

//-------------------------------------
//Client
//-------------------------------------
router.post('/clients', client.create);
router.get('/clients', client.get);
router.get('/clients/:id', client.get);

//-------------------------------------
//Queue
//-------------------------------------
router.post('/queues', queue.create);
router.get('/queues/:id', queue.get);

//-------------------------------------
//Duration
//-------------------------------------
router.post('/durations', queue.createDuration);
router.get('/durations/:id', queue.getDurations);


//-------------------------------------
//Api Manage
//-------------------------------------
router.post('/apis', api.create);
router.get('/apis', api.get);
router.get('/apis/:id', api.get);


module.exports = router;