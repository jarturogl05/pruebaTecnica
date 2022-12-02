const select = require("../database/selectLog");

const getLogs = async (req, res) => {
  try {
    const result = await select.selectRows();
    res.status(200).send( result );

  } catch (e) {
    res.status(500).send({status:'ERROR', message: 'error'});

  }
};

module.exports = { getLogs };
