const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');
const Category = require('./category.model');

var ContestSchema = new mongoose.Schema({
    title: String,
    categories: [Category.CategorySchema]
});

ContestSchema.plugin(mongoosePaginate);
const Contest = mongoose.model('Contest', ContestSchema);

module.exports = Contest;
