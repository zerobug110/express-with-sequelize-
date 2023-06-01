const {Comments} = require("../models")
exports.commentsCtrl = async (res, req)=>{
    try {
        const postId = req.params.postId
        const comments = await Comments.findAll({
            where: {
                postId: postId
            }
        })
        res.json(comments)
        
    } catch (error) {
        return res.status(500).json(error)
    }  
}