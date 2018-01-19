var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ContestSchema = new mongoose.Schema({
    title: String,
    categories: [{type: mongoose.Schema.Types.ObjectId, ref:'Categories'}]
});

ContestSchema.plugin(mongoosePaginate);
const Contest = mongoose.model('Contest', ContestSchema);

module.exports = Contest;