var express = require('express');
var router = express.Router();
var middleware = require('../controllers/middleware');


//----------------------------------------------------//
//  home route
//----------------------------------------------------//
router.get('/', function(req, res, next) {
  res.render('home');
});

//----------------------------------------------------//
//  show signup form route
//----------------------------------------------------//
router.get('/sign-form', function(req, res, next) {
  res.render('signForm');
});

//----------------------------------------------------//
//  show login form route
//----------------------------------------------------//
router.get('/login-form', function(req, res, next) {
  res.render('loginForm');
});

// router.get('/test', middleware.isUserLoggedIn, function(req, res, next) {
//   req.flash('error', 'Please Login.');
//   res.render('/login-form');
// });



module.exports = router;
