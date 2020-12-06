const Connection = require("../../database.js");

module.exports = async (productName, productDescription) => {
  try {
    const query =
      `INSERT INTO ` +
      `products ` +
      `VALUES ` +
      `(null,` +
      `"${productName}",` +
      `${productDescription}`;

    await Connection(query);
    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};
