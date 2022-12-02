const axios = require("axios");

const  insert  = require('../database/insertLog');

const currentModule = "PHOTO"


const getAlbumListByUser = async (req, res) => {
    const user = req.params.userId;
    var datetime = new Date();


  try {
    const result = await axios.get("https://jsonplaceholder.typicode.com/albums?userId=" + user, {
      headers: {
        "Accept-Encoding": "application/json",
      },
    });
    
    insert.insertRow({date: datetime, module: currentModule, description: "album list fetched"})

    res.status(200).send( result.data );

  } catch (e) {
    insert.insertRow({date: datetime, module: currentModule, description: "error on fetch album list"})

    res.status(500).send({status:'ERROR', message: 'error'});
  }
}

const getPhotoListByAlbum = async (req, res) => {
  const album = req.params.albumId;
  var datetime = new Date();


try {
  const result = await axios.get("https://jsonplaceholder.typicode.com/photos?albumId=" + album, {
    headers: {
      "Accept-Encoding": "application/json",
    },
  });
  
  insert.insertRow({date: datetime, module: currentModule, description: "photo list fetched"})

  res.status(200).send( result.data );

} catch (e) {
  insert.insertRow({date: datetime, module: currentModule, description: "error on fetch photo list"})

  res.status(500).send({status:'ERROR', message: 'error'});
}
}


module.exports = { getAlbumListByUser, getPhotoListByAlbum  };
