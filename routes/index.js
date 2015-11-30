var express = require('express');
var router = express.Router();


router.get('/', function(req, res) {
   res.render('api/index.html');
});

router.get('/create', function(req, res) {
    // res.sendfile('index.html');
   res.render('api/create.html');
});


module.exports = router;