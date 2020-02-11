const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.get("/home", (request, response) => {
  response.send("Hello i am at home");  
});

app.post("/create/user", (req, res) => {
  console.log(req.body);
  res.send("Hola");
});

app.get("/user/:userid", (req, res) => {
  console.log(req.params);
  res.send("hola");
});

app.get("/search", (req, res) => {
  let {num1, num2} = req.query
  num1 = Number(num1)
  num2 = Number(num2)
  res.status(404).send("hola");
});

app.listen(3000, err => {
  if (!err) {
    console.log(`Sever on port ${3000}`);
  }
});
