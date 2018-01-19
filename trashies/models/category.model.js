var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var CategorySchema = new mongoose.Schema({
    title: String,
    contestants: [{type: mongoose.Schema.Types.ObjectId, ref: 'Contestants'}]
});

CategorySchema.plugin(mongoosePaginate);
const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;