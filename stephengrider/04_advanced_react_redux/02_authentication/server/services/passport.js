const passport = require('passport');
const localStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const { secret } = require('../config');

// Create local Strategy
const localOptions = {  };
const localLogin = new localStrategy(localOptions, function(email, password, done) {
  // Verify this username and password, all done with the User
  // if it is the correct username and password
  // otherwise, call done with false
  User.findOne({ email }, function(error, user) {
    if(error) { return done(error) };
    if(!user) { return done(null, false) }; 

    // Compare passwords
    user.comparePassword(password, function(error, isMatch) {
      if(error) { return done(error) };
      if(!isMatch) { return done(null, false) };

      return done(null, user);
    });
  });

});

// Setup options for JWT Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: secret
};

// Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  User.findById(payload.sub, function(error, user) {
    if(error) { return done(error, false) };

    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell Passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);