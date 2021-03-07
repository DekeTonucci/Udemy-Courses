const jwt = require('jwt-simple');
const User = require('../models/user');
const { secret } = require('../config');

function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, secret)
}

exports.signup = (req, res, next) => {
  console.log(req.body);
  const { email } = req.body;
  const { password } = req.body;

  if(!email || !password) {
    return res.status(422).send({ error: 'You must provide emil and password'})
  }

  // See if a user with email already exists
  User.findOne({ email }, (error, existingUser) => {
    if (error) { return next(error)};

    // If there is a user with email does exist, return an error
    if (existingUser) {
      return res.status(422).send({ error: "Email is in use" });
    }
    
    // If a user with email does not exists, create and save user
    const user = new User({ email, password });
    user.save((error) => {
      if (error) { return next(error) };
      
      // Respond to request indicating the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
}

exports.signin = (req, res, next) => {
  // User has already had their email and password auth'd
  // We just need to give them a token
  res.send({ token: tokenForUser(req.user)});
}