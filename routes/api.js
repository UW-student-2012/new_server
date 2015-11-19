var express = require('express');
var router = express.Router();
var client =require('../controllers/client');


//-------------------------------------
//Client
//-------------------------------------
router.post('/clients', client.create);
router.get('/clients', client.get);
router.get('/clients/:id', client.get);


module.exports = router;