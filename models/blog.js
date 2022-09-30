const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Blog = new Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  text: { type: String, required: true },
  comments: { type: Array, required: false }
})

module.exports = mongoose.model('blog', Blog)