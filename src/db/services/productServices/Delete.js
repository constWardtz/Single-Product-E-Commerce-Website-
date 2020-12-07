const Connection = require("../../database.js");

module.exports = async (id) => {
  try {
    const query = `DELETE FROM ` + `products ` + `WHERE ` + `id = ?`;

    await Connection(query, [id]);

    return true;
  } catch {
    return false;
  }
};
