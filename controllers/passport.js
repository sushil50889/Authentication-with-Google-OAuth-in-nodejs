const passport = require('passport');
const googlePlusTokenStrategy = require('passport-google-plus-token');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../models/user');
const config = require('../config/index');

// Google OAuth Strategy

passport.use(new GoogleStrategy({
    clientID: config.oauth.google.clientID,
    clientSecret: config.oauth.google.clientSecret,
    callbackURL: "https://protected-mountain-22094.herokuapp.com/users/auth/google/callback"
  }, async (accessToken, refreshToken, profile, done) => {
    try {
      // Should have full user profile over here
      // console.log(profile);
      const existingUser = await User.findOne({ "google.id": profile.id });
      if (existingUser) {        
        return done(null, existingUser);
      }
  
      const newUser = new User({
        // method: 'google',
        google: {
          id: profile.id,
          name: profile.displayName,
          gender: profile.gender,
          occupation: profile. _json.occupation,
          dob: profile. _json.birthday,
          relationshipStatus: profile. _json.relationshipStatus,
          profileUrl: profile. _json.url
        }
      });
  
      await newUser.save();
      done(null, newUser);
    } catch(error) {
      done(error, error.message);
    }
  }));