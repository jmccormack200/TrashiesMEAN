'use strict'

const CategoryService = require('../services/category.service');
const ContestService = require('../services/contest.service');

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

exports.updateCategory = async function(req, res, next) {
    if (!req.body.category_id) {
        return res.status(400).json({
            status: 400,
            message: "Must contain a valid ID"
        });
    }

    const category_id = req.body.category_id;
    const contest_id = req.params.id;    

    let category = {
        category_id,
        title: req.body.title ? req.body.title : null,
        contestants: req.body.contestants ? req.body.contestants : []
    }

    try {
        var contest = await ContestService.getContest(contest_id);
    } catch(e) {
        throw Error("Error getting contest");
    }

    try {
        let updatedCategory = await CategoryService.updateCategory(contest, category);
        return res.status(200).json({
            status: 200,
            data: updatedCategory,
            message: "Successfully updated category"
        });
    } catch(e) {
        return res.status(400).json({
            status:400,
            message: e.message
        });
    }
}

exports.deleteCategory = async function(req, res, next) {
    const contest_id = req.params.contest_id;
    const category_id = req.params.category_id;

    try {
        var contest = await ContestService.getContest(contest_id);
    } catch(e) {
        throw Error("Error getting contest");
    }

    try {
        var deleted = await CategoryService.deleteCategory(contest, category_id);
        return res.status(204).json({
            status: 204,
            message: "Succesfully deleted category"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}