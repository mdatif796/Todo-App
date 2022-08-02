const express = require('express');
const Todo = require('../models/todoList');


const router = express.Router();


router.get('/', function(req, res) {
    Todo.find({}, (err, todos) => {
        if(err){
            return console.log(`Error in find the todos: ${err}`);
        }
        // console.log(todos);
        return res.render('home', {
            todos: todos
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
        dueDate: req.body.dueDate,
        toggle: false
        // if error occur while creating a todo
    }, (err) => {
        if(err){
            return console.log(`Error in creating a Todo : ${err}`);
        }
        // after creating a todo , redirect to home page
        return res.redirect('/');
    });
});


// post request for toggling the value in the database 
router.post('/todo-toggle', function(req, res){
    Todo.findById(req.body.id, (err, todo) => {
        if(err){
            console.log("Error in toggling the checkbox", err);
            return;
        }
        todo.toggle = !todo.toggle;
        todo.save();
        return res.redirect('/');
    });
});

// post request for deleting the todos by passing the array of all that id of todo which should be deleted
router.post('/delete-todo', function(req, res){
    Todo.findByIdAndDelete(req.body.id, function(err){
        if(err){
            return console.log(`Error in deleting the todo from the database ${err}`);
        }
        return res.redirect('/');
    });
});

module.exports = router;