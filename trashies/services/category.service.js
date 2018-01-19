var Category = require('../models/category.model');
var Contest = require('../models/contest.model');

_this = this;

exports.getCategories = async function(id) {
    try {
        var contest = await Contest.findById(id);
    } catch(e) {
        throw Error("Error while finding contest");
    }

    if (!contest) {
        throw Error("Contest not found");
    }
    return contest.categories;
}

exports.createCategory = async function(category) {
    console.log("!!!!!!");
    console.log(category);
    var newCategory = new Category({
        title: category.title,
        contestants: category.contestants
    })
    console.log(newCategory);
        
    try {
        var createdCategory = await newCategory.save();
        return createdCategory;
    } catch(e) {
        throw Error("Error while creating category");
    }
}