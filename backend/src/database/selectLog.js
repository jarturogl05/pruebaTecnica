const db = require("../db");

async function selectRows() {
  return new Promise(function (resolve, reject) {
    db.createDbConnection().all("SELECT * FROM logs", function (err, rows) {
      if (err) {
        return reject(err);
      }
      db.createDbConnection().close();
      resolve(rows);
    });
  });
}

module.exports = { selectRows };
