'use strict';
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

exports.updateCategory = async function(contest, category) {
    const id = category.category_id;

    try {
        var oldCategory = contest.categories.id(id);
    } catch(e) {
        throw Error(e.message);
    }

    if (!oldCategory) {
        return false;
    }
  
    oldCategory.title = category.title;
    oldCategory.contestants = category.contestants;

    try {
        const savedCategory = await contest.save();
        return savedCategory;
    } catch(e) {
        throw Error(e.message);
    }
}

exports.deleteCategory = async function(contest, category_id) {
    try {
        console.log(contest);
        contest.categories.id(category_id).remove();
        contest.save();
    } catch(e) {
        throw Error(e.message);
    }
}   