const Connection = require("../../database.js");

module.exports = async (
  productName,
  productDescription,
  productRatings = 0
) => {
  try {
    const query =
      `INSERT INTO ` +
      `products ` +
      `SET ` +
      `id = null,` +
      `productName = ?,` +
      `productDescription = ?,` +
      `productRatings = ?`;

    await Connection(query, [productName, productDescription, productRatings]);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
