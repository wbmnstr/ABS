const express = require('express');
const router = express.Router();



router.get('/', function(req, res) {
    res.render('home');
});

router.get('/cagri', function(req, res) {
    res.render('cagri');
});

router.get('/takip', function(req, res) {
    res.render('takip');
});




module.exports = router;