const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define Model
const userSchema = new Schema({
  email: { 
    type: String,
    unique: true, // Will only allow 1 email to be used
  },
  password: String,
});

// On save hook, encrypt password
// .pre('save') = before save run this function
userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, (error, salt) => {
    if(error) { return next(error) };

    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) { return next(error) };

      user.password = hash;
      next();
    })
  })
});

// compare passwords method
userSchema.methods.comparePassword = function(candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.password, function(error, isMatch) {
    if (error) { return callback(error) };

    callback(null, isMatch);
  })
};

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
