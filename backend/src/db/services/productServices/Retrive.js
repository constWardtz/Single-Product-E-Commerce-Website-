const Connection = require("../../database.js");

module.exports = async (dataFields) => {
  try {
    const query = `SELECT ` + `${dataFields} ` + `FROM ` + `products`;
    const result = await Connection(query);
    return result;
  } catch (e) {
    console.log(e);
    return [];
  }
};
