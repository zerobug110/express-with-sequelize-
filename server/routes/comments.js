const express = require("express")
const {commentsCtrl, addCommentCtrl} = require("../controllers/commentsCtrl")

const router = express.Router()
router.post("/", addCommentCtrl)
router.get("/:postId", commentsCtrl);

module.exports = router;