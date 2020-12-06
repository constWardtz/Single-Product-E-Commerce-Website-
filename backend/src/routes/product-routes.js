const router = require("express").Router();

// Services Variables
const CreateService = require("../db/services/productServices/Create");
const RetriveService = require("../db/services/productServices/Retrive");
const UpdateService = require("../db/services/productServices/Update");
const DeleteService = require("../db/services/productServices/Delete");

// RetriveProduct
router.get("/", async (req, res) => {
  try {
    const query = await RetriveService("*");
    query ? res.json(query) : res.json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:field", async (req, res) => {
  const { field } = req.params;
  try {
    const query = await RetriveService(field);
    query ? res.json(query) : res.json({ message: "Something Went Wrong" });
  } catch (err) {
    console.log(err);
  }
});

router.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  res.send(`ID: ${id}`);
});

// End Of RetriveProduct

module.exports = router;
