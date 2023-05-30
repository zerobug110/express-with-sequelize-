const express = require("express")
const  router = express.Router();
const {Posts} = require("../models")

router.get("/", async (req, res) => {
    const listOfPosts = await Posts.findAll();
    res.json(listOfPosts);
});

router.post("/", async (req, res) => {
    try {
        const post = req.body;
        console.log(req.body);
        await Posts.create(post);
        res.json(post);
    } catch (error) {
         return res.status(500).json(error);
    }

});

module.exports = router; 