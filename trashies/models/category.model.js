const mongoose = require('mongoose');
const Contestant = require('./contestant.model');

var CategorySchema = new mongoose.Schema({
    title: String,
    contestants: [Contestant]
});

module.exports = CategorySchema;