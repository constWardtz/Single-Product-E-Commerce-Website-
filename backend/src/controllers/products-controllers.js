// Services Variables
const CreateService = require("../db/services/productServices/Create");
const RetriveService = require("../db/services/productServices/Retrive");
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
  res.send(`ID: ${id}`);
};

module.exports = {
  addProduct,
  retrieveAllProduct,
  retriveSpecific,
  retriveOneProduct,
};
