const express = require('express');   // requiring express for future use.
const path = require('path');  // requiring path for attaching path with the root file 
const port = 8000;     


// creating app of express
const app = express();   


// adding static files 
app.use(express.static('assets'));


// setting up the view engine for ejs file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res){
    res.render('home');
});


// my express app listening on this port
app.listen(port, (err) => {
    if(err){
        console.log(`Error in listening on the port:${port}`);
        return;
    }
    console.log(`Express server is successfully running on the port:${port}`);
});