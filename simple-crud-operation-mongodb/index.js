const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productsRoute = require("./routes/product.route");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/products",productsRoute);


mongoose
  .connect(
    "mongodb+srv://<db_username>:<db_password>@mybackendcluster.ppxar2p.mongodb.net/Node-API?retryWrites=true&w=majority&appName=<cluster_name>"    //replace with your connection string
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });
