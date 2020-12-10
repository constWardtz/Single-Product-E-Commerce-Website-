const router = require("express").Router();

// Controllers
const ProductControllers = require("../controllers/products-controllers");

const {
  addProduct,
  retrieveAllProduct,
  retriveSpecific,
  retriveOneProduct,
  removeProduct,
  updateProduct,
} = ProductControllers;

// CreateProduct
router.post("/addProduct", addProduct);
// End Of Create Product

// RetriveProduct
router.get("/", retrieveAllProduct);

router.get("/:field", retriveSpecific);

router.get("/product/:id", retriveOneProduct);
// End Of RetriveProduct

// Delete Products
router.delete("/product/remove/:id", removeProduct);
// End Of Delete Product

// Update Product
router.post("/product/update/:id", updateProduct);
// End Of Update Product

module.exports = router;
