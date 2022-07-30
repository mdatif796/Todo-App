const express = require('express');   // requiring express for future use.
const port = 8000;     

const app = express();   // creating app of express



// my express app listening on this port
app.listen(port, (err) => {
    if(err){
        console.log(`Error in listening on the port:${port}`);
        return;
    }
    console.log(`Express server is successfully running on the port:${port}`);
});