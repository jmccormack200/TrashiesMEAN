const mongoose = require('mongoose');

var ContestantSchema = new mongoose.Schema({
    title: String,
    url: String
});

module.exports = ContestantSchema;