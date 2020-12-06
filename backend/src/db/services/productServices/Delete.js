const Connection = require("../../database.js");

module.exports = async (id) => {
  try {
    const query = `DELETE FROM ` + `products ` + `WHERE ` + `id = ${id}`;

    await Connection(query);

    return true;
  } catch {
    return false;
  }
};
