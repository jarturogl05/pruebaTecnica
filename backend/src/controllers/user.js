const axios = require("axios");
const  insert  = require('../database/insertLog');

const currentModule = "USER"

const getUserList = async (req, res) => {

  var datetime = new Date();

  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/users", {
      headers: {
        "Accept-Encoding": "application/json",
      },
    });
    insert.insertRow({date: datetime, module: currentModule, description: "user list fetched"})
    res.status(200).send( result.data );

  } catch (e) {
    insert.insertRow({date: datetime, module: currentModule, description: "error on fetch user list"})

    res.status(500).send({status:'ERROR', message: 'error'});
  }

};

module.exports = { getUserList };
