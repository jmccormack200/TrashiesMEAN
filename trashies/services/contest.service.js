var Contest = require('../models/contest.model');
var Category = require('../models/category.model');

_this = this;

exports.getContests = async function(query, page, limit) {
    var options = {
        page,
        limit
    }

    try {
        var contests = await Contest.paginate(query, options);
        return contests;
    } catch (e) {
        throw Error('Error While Paginating Contests');
    }
}

exports.createContest = async function(contest) {
    var newContest = new Contest({
        title: contest.title,
        categories: contest.categories
    });

    try {
        var savedContest = await newContest.save();
        return savedContest;
    } catch(e) {
        throw Error("Error while creating contest");
    }
}

exports.updateContest = async function(contest) {
    var id = contest.id;

    try {
        var oldContest = await Contest.findById(id);
    } catch (e) {
        throw Error("Error occured while finding the contest");
    }

    if (!oldContest) {
        return false;
    }

    console.log(oldContest);

    oldContest.title = contest.title;
    oldContest.categories = contest.categories;

    console.log(oldContest);

    try {
        var savedContest = await oldContest.save();
        return savedContest;
    } catch(e) {
        throw Error("An Error occured while updating the Contest");
    }
}

exports.deleteContest = async function(id) {
    try {
        var deleted = await Contest.remove({_id: id});
        if (deleted.result.n === 0) {
            throw Error("Contest could not be deleted");
        }
        return deleted;
    } catch(e) {
        throw Error("Error occured while Deleting the Todo");
    }
}

exports.getContest = async function(id) {
    try {
        return await Contest.findById(id);
    } catch (e) {
        throw Error("Error occured while finding the contest");
    }
}