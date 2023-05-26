const express = require("express")
const app = express();
const db = require("./models")

const port = 3001
//routes 
const postRouter = require("./routes/post")
//middle wares
app.use("/post", postRouter)
app.use(express.json());


db.sequelize.sync().then(()=> {
   
     app.listen(port, ()=> {
        console.log(`server runing on ${port}`)
    })
})
