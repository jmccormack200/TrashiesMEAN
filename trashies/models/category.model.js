const mongoose = require('mongoose');
const Contestant = require('./contestant.model');

var CategorySchema = new mongoose.Schema({
    title: String,
    contestants: [Contestant.ContestantSchema]
});

var Category = mongoose.model('Category', CategorySchema);
exports.CategorySchema = CategorySchema;
exports.Category = Category;