const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
    description: { type: String, required: true, trim: true },
    status: { type: String, required: true }
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;