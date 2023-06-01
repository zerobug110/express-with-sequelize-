const express = require("express")
const app = express();
const db = require("./models")
const cors = require("cors")

const port = 3001
//routes 
const postRouter = require("./routes/post")
const commentRouter = require("./routes/comments")
//middle wares

app.use(cors())
app.use(express.json());
app.use("/comments", commentRouter)
app.use("/posts", postRouter)




db.sequelize.sync().then(()=> {
   
     app.listen(port, ()=> {
        console.log(`server runing on ${port}`)
    })
})



