const mongoose = require('mongoose');

// creating schema for our model
const todoSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
    },
    dueDate: {
        type: String,
        required: true
    }
});


// creating model
const Todo = new mongoose.model('Todo', todoSchema);

// export the model
module.exports = Todo;
