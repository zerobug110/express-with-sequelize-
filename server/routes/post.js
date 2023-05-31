const express = require("express");
const { getPostsCtrl, createPostCtrl, getPost } = require("../controllers/postCtrl");
const  router = express.Router();

// get all post
router.get("/", getPostsCtrl);
//create a post
router.post("/",createPostCtrl);
//get a single post
router.get("/byId/:id", getPost)

module.exports = router; 