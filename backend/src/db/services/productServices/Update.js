const Connection = require("../../database.js");

module.exports = async (
  id,
  productName,
  productDescription,
  productRatings
) => {
  try {
    const query =
      `UPDATE ` +
      `products ` +
      `SET ` +
      `productName = ?,` +
      `productDescription = ?,` +
      `productRatings = ? ` +
      `WHERE ` +
      `id = ?`;
    await Connection(query, [
      productName,
      productDescription,
      productRatings,
      id,
    ]);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
