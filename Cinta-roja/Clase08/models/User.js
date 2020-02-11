const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const SALT = 10

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
},{timestamps: true});



userSchema.pre("save", function(next) {

  let user = this;

  if (!user.isModified("password")) {
    return next();
  }

  bcrypt.genSalt(SALT, function(err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });

});


userSchema.methods.comparePassword = function(candidatePassword, next) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return next(err);
    next(null, isMatch);
  });
};

const User = mongoose.model("User", userSchema)


module.exports = User