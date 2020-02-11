const mongoose = require("mongoose");
const bdUrl =
  "mongodb+srv://root:root@cluster0-07urh.mongodb.net/cinta-roja-b37?retryWrites=true&w=majority";
const Product = require("./Product");
const User = require("./User")

mongoose.connect(
  bdUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  err => {
    !err ? console.log(`Connection successfully`) : console.log(err);
  }
);

module.exports = {
  Product,
  User
};
