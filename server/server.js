const express = require('express')

//Setup and configure app
const app = express()
const port = 5000

const { exec } = require('child_process');
exec('dir', {'shell':'powershell.exe'}, (error, stdout, stderr)=> {
    // do whatever with stdout
    console.log(stdout);
    app.get('/api', (req, res) => {
        res.send(stdout)
      })
})

//Initialize app
app.listen(port, () => console.log(`Server listening on port ${port}!`))