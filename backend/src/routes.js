const express = require('express');
const router = express.Router();

const userController =  require("./controllers/user");
const postController = require("./controllers/post");
const albumController = require("./controllers/album");
const logController = require("./controllers/log")

//User routes
router.get("/user/list", userController.getUserList);

//post routes
router.get("/post/list/:userId", postController.getPostListByUser);

//photo routes

router.get("/album/list/:userId", albumController.getAlbumListByUser)
router.get("/photo/list/:albumId", albumController.getPhotoListByAlbum)


//log route

router.get("/logs", logController.getLogs);

module.exports = router;
