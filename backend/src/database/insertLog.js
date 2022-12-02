const db  = require("../db");

function insertRow(data) {
    db.createDbConnection()

    db.createDbConnection().run(
    `INSERT INTO logs (date, module, description) VALUES (?, ?, ?)`,
    [data.date, data.module, data.description],
    function (error) {
      if (error) {
        console.error(error.message);
      }
      console.log(`Inserted a row with the ID: ${this.lastID}`);
    }
  );
  db.createDbConnection().close();

}

module.exports = {insertRow}