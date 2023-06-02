const express = require("express")
const app = express();
const db = require("./models")
const cors = require("cors")

const port = 3001
//routes 
const postRouter = require("./routes/post")
const commentRouter = require("./routes/comments")

//middlewares
app.use(cors())
app.use(express.json());
app.use("/posts", postRouter)
app.use("/comments", commentRouter)


db.sequelize.sync().then(()=> {
     app.listen(port, ()=> {
        console.log(`server runing on ${port}`)
    })
})



