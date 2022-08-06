const express = require('express');
const homeController = require('../controllers/homeController');

const router = express.Router();

// fetch all the data from database
router.get('/', homeController.home);



// used as route for creating a todo in database
router.post('/create-todo', homeController.createTodo);


// post request for toggling the value in the database 
router.post('/todo-toggle', homeController.todoToggle);

// post request for deleting the todos by passing the array of all that id of todo which should be deleted
router.post('/delete-todo', homeController.deleteTodo);

// exporting router for using in another file
module.exports = router;