const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express()
const port = 3000
var corsOptions = {
    origin: "http://localhost:8081"
  };
  
app.use(cors(corsOptions));
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


app.get ('./', (req, res)=>{
res.json({message: "wellcome to my base project"})

});

app.get("/user", async(req, res)=>{
    const users = await db.User.findAll();
    res.respond(users, 200);
});

//set port,listen for request
const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});

app.get("/404", async function(req, res){
    res.fileNotFound("resource not found");
})

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);