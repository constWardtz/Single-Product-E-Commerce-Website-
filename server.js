// Libraries
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Library Usage
const app = express();

// MIDDEWARE
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// ROUTEs VARIABLES
const productsRoutes = require("./src/routes/product-routes");
// ROUTES
app.use("/products", productsRoutes);

// SERVER RUNNING
const PORT = 5000 || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running to Port : ${PORT}`);
});
