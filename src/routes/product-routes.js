const router = require("express").Router();

// Controllers
const ProductControllers = require("../controllers/products-controllers");

const {
  addProduct,
  retrieveAllProduct,
  retriveSpecific,
  retriveOneProduct,
} = ProductControllers;

// CreateProduct
router.post("/addProduct", addProduct);
// End Of Create Product

// RetriveProduct
router.get("/", retrieveAllProduct);

router.get("/:field", retriveSpecific);

router.get("/product/:id", retriveOneProduct);
// End Of RetriveProduct

module.exports = router;
