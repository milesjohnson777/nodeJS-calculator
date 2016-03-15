var express = require('express');
var router = express.Router();

router.post('/add', function(req, res){
    var result = parseFloat(req.body.firstNumber) + parseFloat(req.body.nextNumber);
    result = result.toString();
    res.send(result);
});

router.post('/minus', function(req, res){
    var result = parseFloat(req.body.firstNumber) - parseFloat(req.body.nextNumber);
    result = result.toString();
    res.send(result);
});

router.post('/multiply', function(req, res){
    var result = parseFloat(req.body.firstNumber) * parseFloat(req.body.nextNumber);
    result = result.toString();
    res.send(result);
});

router.post('/divide', function(req, res){
    var result = parseFloat(req.body.firstNumber) / parseFloat(req.body.nextNumber);
    result = result.toString();
    res.send(result);
});

module.exports = router;
