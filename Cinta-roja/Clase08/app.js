const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const { Product } = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  Product.findByIdAndUpdate(req.params.productid, { $set: req.body }, {new:true}, (err, response) => {
    !err ? res.status(200).send(response) : res.send(err);
  });
});

app.listen(PORT, err => {
  err ? console.log(err) : console.log(`Server on port ${PORT}`);
});
