const Connection = require("../../database.js");

module.exports = async (id) => {
  try {
    const query =
      `SELECT ` + `* ` + `FROM ` + `products ` + `WHERE ` + `id = ?`;
    const result = await Connection(query, [id]);
    return result;
  } catch (e) {
    console.log(e);
    return [];
  }
};
