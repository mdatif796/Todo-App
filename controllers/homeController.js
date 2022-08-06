const Todo = require('../models/todoList');

//  home controller
module.exports.home = function(req, res) {
    Todo.find({}, (err, todos) => {
        if(err){
            return console.log(`Error in find the todos: ${err}`);
        }
        // console.log(todos);
        return res.render('home', {
            todos: todos
        });
    });
}

//  createTodo controller
module.exports.createTodo = function(req, res){
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
}

// todoToggle controller
module.exports.todoToggle = function(req, res){
    Todo.findById(req.body.id, (err, todo) => {
        if(err){
            console.log("Error in toggling the checkbox", err);
            return;
        }
        todo.toggle = !todo.toggle;
        todo.save();
        return res.redirect('/');
    });
}

// deleteTodo controller
module.exports.deleteTodo = function(req, res){
    Todo.findByIdAndDelete(req.body.id, function(err){
        if(err){
            return console.log(`Error in deleting the todo from the database ${err}`);
        }

        // after deleting the todo, render the home page for updating the changes
        return Todo.find({}, function(err, todos){
            if(err){
                return console.log(`Error in loading the data after deletion, ${err}`);
            }
            return res.render('home', {
                todos : todos
            });
        });
        // return res.redirect('/');
    });
}