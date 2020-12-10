// Services Variables
const CreateService = require("../db/services/productServices/Create");
const RetriveService = require("../db/services/productServices/Retrive");
const RetriveOneService = require("../db/services/productServices/RetriveOneProduct");
const UpdateService = require("../db/services/productServices/Update");
const DeleteService = require("../db/services/productServices/Delete");

const addProduct = async (req, res) => {
  const { productName, productDescription } = req.body;
  try {
    const query = await CreateService(productName, productDescription);
    query
      ? res.status(200).json({ redirectTo: "PATH HERE" })
      : res.status(200).json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
};

const retrieveAllProduct = async (req, res) => {
  try {
    const query = await RetriveService("*");
    query
      ? res.status(200).json(query)
      : res.status(404).json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
};

const retriveSpecific = async (req, res) => {
  const { field } = req.params;
  try {
    const query = await RetriveService(field);
    query
      ? res.status(200).json(query)
      : res.status(404).json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
};

const retriveOneProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const query = await RetriveOneService(id);
    query
      ? res.status(200).json(query)
      : res.status(404).json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
};

const removeProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const query = await DeleteService(id);
    query
      ? res.json("Product Deleted")
      : res.json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { productName, productDescription, productRatings } = req.body;
  try {
    const query = await UpdateService(
      id,
      productName,
      productDescription,
      productRatings
    );
    query
      ? res.json({ message: "Product Info Updated" })
      : res.json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  addProduct,
  retrieveAllProduct,
  retriveSpecific,
  retriveOneProduct,
  removeProduct,
  updateProduct,
};
