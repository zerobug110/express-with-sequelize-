const {Comments} = require("../models")

exports.commentsCtrl = async (req, res) => {
  try {
    const postId = req.params.postId;
    const comments = await Comments.findAll({ where: { PostId: postId } });
    res.json(comments);
  } catch (error) {
    return res.status(500).json(error.message)  
  }
    
}
exports.addCommentCtrl = async (res, req) => {
  try {
    res.status(200).json({"message": "succesfull"})
  } catch (error) {
    res.status(500).json(error.message)
  }
}

