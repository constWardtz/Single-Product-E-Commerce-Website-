const Connection = require("../../database.js");

module.exports = async (id, productName, productDescription) => {
  try {
    const query =
      `UPDATE ` +
      `products ` +
      `SET ` +
      `productName = ?,` +
      `productDescription = ? ` +
      `WHERE ` +
      `id = ?`;
    await Connection(query, [productName, productDescription, id]);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
