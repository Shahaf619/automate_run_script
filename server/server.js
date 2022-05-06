const path = require('path');
const express =require("express");
const bodyParser =require("body-parser");
var cors = require("cors");

// Setup and configure app
const app = express()
const port = process.env.PORT|| 3002;
app.use(bodyParser.json());
app.use(cors());

// This will create a middleware.
// When you navigate to the root page, it would use the built react-app
app.use(express.static(path.resolve(__dirname, "../client/build")));

const { exec } = require('child_process');
exec('dir',  (error, stdout, stderr)=> 
 {
    // do whatever with stdout 
    console.log(stdout);
    app.get('/api', (req, res) => 
    {
        console.log("here is api")
        res.send({data : stdout})
        //res.json({ message: "Hello from server!" });
    })
})


// Create API for POST data
app.post('/api2', (req, res) => 
    {
      const {data} = req.body;
        console.log("here is POST api!")
        console.log(data)
    })

//Initialize app
app.listen(port,() => 
{
  console.log("listen on port: ", port);
});