const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { Product, User } = require("./models");
const cors = require("cors");
const {generateToken, validateToken} = require("./middlewares/token")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// GET ALL ACTIVE PRODUCTS
app.get("/api/v1/get/all/active", validateToken, (req, res) => {
  Product.find({ is_active: true }, (err, response) => {
    !err ? res.status(200).send(response) : res.send(err);
  });
});

// CREATE PRODUCT END POINT
app.post("/api/v1/create/product", (req, res) => {
  let newProduct = new Product(req.body);

  newProduct.save((err, response) => {
    !err ? res.status(201).send(response) : res.send(err);
  });
});

// GET PRODUCT END POINT

app.get("/api/v1/get/product/:productid", (req, res) => {
  Product.findById(req.params.productid, (err, response) => {
    !err ? res.status(200).send(response) : res.send(err);
  });
});

// UPDATE PRODUCT END POINT

app.put("/api/v1/update/product/:productid", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.productid,
    { $set: req.body },
    { new: true },
    (err, response) => {
      !err ? res.status(200).send(response) : res.send(err);
    }
  );
});

// DELETE PRODUCT END POINT

app.delete("/api/v1/delete/product/:productid", (req, res) => {
  Product.findByIdAndUpdate(
    req.params.productid,
    { $set: { is_active: false } },
    { new: true },
    (err, response) => {
      !err ? res.status(200).send(response) : res.send(err);
    }
  );
});

// USER CREATE

app.post("/api/v1/user/create", validateToken, (req, res) => {
  const newUser = new User(req.body);

  newUser.save((err, response) => {
    if (!err) {
      res.status(201).send(response);
    } else {
      res.status(409).send(err);
    }
  });
});

// USER LOGIN

app.post("/api/v1/user/login", (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email: email }, (err, dbUser) => {
    if (!err) {
      dbUser.comparePassword(password, (err, isMatch) => {
        if (!err) {
          if (isMatch) {
            const token = generateToken(dbUser)
            res.status(200).send(token);
          } else {
            res.status(404).send("Invalid password");
          }
        } else {
          res.status(409).send(err);
        }
      });
    } else {
      res.send(err);
    }
  });
});



app.listen(PORT, err => {
  err ? console.log(err) : console.log(`Server on port ${PORT}`);
});
