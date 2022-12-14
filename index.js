const bodyParser = require('body-parser');
const express = require('express');   // requiring express for future use.
const path = require('path');  // requiring path for attaching path with the root file 
const port = 8000;  

// connecting database with the server
const db = require('./config/databaseConnection');   
const Todo = require('./models/todoList');


// creating app of express
const app = express();   

// for parsing the data which comes from browser
app.use(bodyParser.urlencoded({extended: false}));


// adding static files 
app.use(express.static('assets'));


// setting up the view engine for ejs file
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// middleware is used
app.use('/', require('./routes'));

// whenever a get request comes from the browser it is send to router function
app.get('/', require('./routes/index.js'));

// whenever a post request comes from the browser it is send to router function
app.post('/', require('./routes/index.js'));


// my express app listening on this port
app.listen(process.env.PORT || port, (err) => {
    if(err){
        console.log(`Error in listening on the port:${port}`);
        return;
    }
    console.log(`Express server is successfully running on the port:${port}`);
});