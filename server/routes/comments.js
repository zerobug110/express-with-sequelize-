const express = require("express")
const {commentsCtrl, addCommentCtrl} = require("../controllers/commentsCtrl")

const router = express.Router()
router.get("/:postId", commentsCtrl);
router.get("/", addCommentCtrl)

module.exports = router;