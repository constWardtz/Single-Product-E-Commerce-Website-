const Connection = require("../../database.js");

module.exports = async (id, productName, productDescription) => {
  try {
    const query =
      `UPDATE ` +
      `products ` +
      `SET ` +
      `productName = "${productName}",` +
      `productDescription = "${productDescription}" ` +
      `WHERE ` +
      `id = ${id}`;
    await Connection(query);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
