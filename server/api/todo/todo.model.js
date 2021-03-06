'use strict';

const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const TodoSchema = new Schema({
  title: String,
  completed: Boolean,
  important: Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
