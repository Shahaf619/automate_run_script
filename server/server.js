const path = require('path');
const express =require("express");
const bodyParser =require("body-parser");
var cors = require("cors");

//Setup and configure app
const app = express()
const port = process.env.PORT|| 3002;
app.use(bodyParser.json());
app.use(cors());

const { exec } = require('child_process');
 exec('dir', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    // do whatever with stdout
    console.log(stdout);
    app.get('/api', (req, res) => {

        console.log("here is api")
        res.send({data : stdout})
        //res.json({ message: "Hello from server!" });
      })
})

//Initialize app
app.listen(port,() => {

  console.log("listen on port: ", port);
  
  });