const mysql = require("mysql");

const dbconfig = {
  host: "localhost",
  user: "root",
  password: "kramdroid",
  database: "crochet-website",
};

const db = mysql.createPool(dbconfig);

module.exports = (query, placeHolder) => {
  return new Promise((resolve, reject) => {
    db.getConnection((err, connection) => {
      if (err) {
        reject(err);
      } else {
        connection.query(query, placeHolder, (err, result) => {
          err ? reject(err) : resolve(result);
          connection.release();
        });
      }
    });
  });
};
