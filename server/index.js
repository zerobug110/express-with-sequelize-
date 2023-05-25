const express = require("express")
const app = express();
const db = require("./models")

const port = 3001
//routes 
const postRouter = require("./routes/route")
db.sequelize.sync().then(()=> {
   
     app.listen(port, ()=> {
        console.log(`server runing on ${port}`)
    })
})
