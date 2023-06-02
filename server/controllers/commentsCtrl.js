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
exports.addCommentCtrl = async (req, res) => {
  try {
    const comment = req.body;
    await Comments.create(comment)
    res.json(comment)
  } catch (error) {
    res.status(500).json(error.message)
  }
}
