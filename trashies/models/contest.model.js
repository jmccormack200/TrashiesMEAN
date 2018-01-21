var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var ContestSchema = new mongoose.Schema({
    title: String,
    categories: [{
        title: String,
        contestants: [{
            name: String,
            url: String
        }]
    }]
});

ContestSchema.plugin(mongoosePaginate);
const Contest = mongoose.model('Contest', ContestSchema);

module.exports = Contest;