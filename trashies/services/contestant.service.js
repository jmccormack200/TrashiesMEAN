const Contest = require('../models/contest.model');
const Category = require('../models/category.model');
const Contestant = require('../models/contestant.model').Contestant;

const CategoryService = require('../services/category.service');
const ContestService = require('../services/contest.service');
const ContestantService = require('../services/contestant.service');

_this = this;

exports.getContestants = async function(contest_id, category_id) {
    try {
        var contest = await ContestService.getContest(contest_id)
        var category = contest.categories.id(category_id);
    } catch(e) {
        throw Error(e.message);
    }
    
    if (!category) {
        throw Error("Contestants not found");
    }
    return category.contestants;
}

exports.createContestant = async function(contest_id, category_id, contestant) {
    var newContestant = new Contestant({
        title: contestant.title,
        url: contestant.url
    });
    console.log(newContestant);
    try {
        var createdContestant = await newContestant.save();
    } catch(e) {
        throw Error("Error creating contestant");
    }
    try {
        var oldContest = await ContestService.getContest(contest_id);
    } catch(e) {
        throw Error("Error getting Contest");
    }
    try {
        var updatedContest = await ContestService.updateContest(oldContest);
        updatedContest.save();
        return updatedContest;
    } catch(e) {
        throw Error(e.message);
    }
}