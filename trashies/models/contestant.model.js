const mongoose = require('mongoose');

var ContestantSchema = new mongoose.Schema({
    title: String,
    url: String
});

exports.Contestant = mongoose.model('Contestant', ContestantSchema);
exports.ContestantSchema = ContestantSchema;