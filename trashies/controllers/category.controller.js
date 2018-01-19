var CategoryService = require('../services/category.service');
var ContestService = require('../services/contest.service');

_this = this;

exports.getCategories = async function(req, res, next) {
    var id = req.params.id;

    try {
        var categories = await CategoryService.getCategories(id);
        return res.status(200).json({
            status: 200,
            data: categories,
            message: "Successfully fetched categories"
        });
    } catch (e) {
        return res.status(400)
            .json({
                status: 400,
                message: e.message
            });
    }
}

exports.addCategory = async function(req, res, next) {
    var id = req.params.id;
    var category = {
        title: req.body.title,
        contestants: req.body.contestants
    }
    console.log(category);
    try {
        var createdCategory = await CategoryService.createCategory(category);
    } catch(e) {
        throw Error("Error creating category");
    }

    try {
        var oldContest = await ContestService.getContest(id);
    } catch(e) {
        throw Error("Error getting contest");
    }
    oldContest.categories.push(createdCategory);
    try {
        var updatedContest = await ContestService.updateContest(oldContest);
        return res.status(200).json({
            status: 200,
            data: updatedContest,
            message: "Successfully added category"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}