var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ContestantSchema = new mongoose.Schema({
    title: String,
    url: String
});

ContestantSchema.plugin(mongoosePaginate);
const Contestant = mongoose.model('Contestant', ContestantSchema);

module.exports = Contestant;