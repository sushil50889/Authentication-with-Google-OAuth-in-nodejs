var express = require('express');
var router = express.Router();
var passport = require('passport');
var googlePlusTokenStrategy = require('passport-google-plus-token');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passportConf = require('../controllers/passport');
const mongoose = require('mongoose');
const User = require('../models/user');
var middleware = require('../controllers/middleware');

/* GET users listing. */
router.get('/accountInfo', middleware.isUserLoggedIn, function(req, res, next) {
  res.render('accountInfo');
});

router.get('/google-OAuth', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login'] }));


router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login-form', successRedirect: '/users/accountInfo', successFlash: 'Welcome! Successfully Authenticated.' }),
  function(req, res) {
    
});



router.get('/logout', function(req, res, next){
    req.logout();
    res.redirect('/');
});  

module.exports = router;
