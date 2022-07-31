const express = require('express');
const Todo = require('../models/todoList');


const router = express.Router();

// color array
let colorArray = {
    'Personal' : 'red',
    'Work' : 'blue',
    'Cleaning' : 'yellow',
    'School' : 'skyblue'
};

router.get('/', function(req, res) {
    Todo.find({}, (err, todos) => {
        if(err){
            return console.log(`Error in find the todos: ${err}`);
        }
        // console.log(todos);
        return res.render('home', {
            todos: todos,
            colorArray: colorArray
        });
    });
});



// used as route for creating a todo in database
router.post('/create-todo', function(req, res){
    // the form data is catched by req.body
    let desc = req.body.description;
    // making the first letter capital
    desc = desc.charAt(0).toUpperCase() + desc.slice(1);
    // console.log(desc);

    // ODM for creating the Todo
    Todo.create({
        description: desc,
        category: req.body.category,
        dueDate: req.body.dueDate
        // if error occur while creating a todo
    }, (err) => {
        if(err){
            return console.log(`Error in creating a Todo : ${err}`);
        }
        // after creating a todo , redirect to home page
        return res.redirect('/');
    });
});

module.exports = router;