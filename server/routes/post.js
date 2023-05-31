const express = require("express");
const { getPostsCtrl, createPostCtrl } = require("../controllers/postCtrl");
const  router = express.Router();


router.get("/", getPostsCtrl);

router.post("/",createPostCtrl);

module.exports = router; 