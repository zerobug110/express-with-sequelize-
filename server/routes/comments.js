const express = require("express")
const {commentsCtrl} = require("../controllers/commentsCtrl")

const router = express.Router()
//get all coments associated to a post
router.get("/:postId", commentsCtrl)

module.exports = router;