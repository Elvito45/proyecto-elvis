var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Proyecto Elvis', 
    name: 'Elvis',
    lastname: 'Caraballo',
    dni: '31459117',
  });
});

module.exports = router;
