const axios = require("axios");

const  insert  = require('../database/insertLog');

const currentModule = "POSTS"


const getPostListByUser = async (req, res) => {
  const user = req.params.userId;
  var datetime = new Date();


  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/posts?userId=" + user, {
      headers: {
        "Accept-Encoding": "application/json",
      },
    });

    insert.insertRow({date: datetime, module: currentModule, description: "post list fetched"})
    res.status(200).send( result.data );

  } catch (e) {
    insert.insertRow({date: datetime, module: currentModule, description: "error on fetch post list"})

    res.status(500).send({status:'ERROR', message: 'error'});
  }
};

module.exports = { getPostListByUser };
