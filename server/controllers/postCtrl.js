const { Posts } = require("../models");

exports.getPostsCtrl = async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
} 

exports.createPostCtrl = async (req, res) => {
    try {
        const post = req.body;
        console.log(req.body);
        await Posts.create(post);
        res.json(post);
    } catch (error) {
         return req.status(500).json(error);
    }
}

exports.getPost = async (req, res) => {
    try {
        const id = req.params.id
        const post = await Posts.findByPk(id)
        res.json(post)
        
    } catch (error) {
        return res.status(500).json(error)
        
    }
}

  