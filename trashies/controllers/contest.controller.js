var ContestService = require('../services/contest.service');

_this = this;

exports.getContests = async function(req, res, next) {
    var page = req.query.page ? req.query.page : 1;
    var limit = req.query.limit ? req.query.limit : 10;

    try {
        var contests = await ContestService.getContests({}, page, limit);
        return res.status(200).json({
            status: 200,
            data: contests, 
            message: "Recieved contests"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.createContest = async function(req, res, next) {
    var contest = {
        title: req.body.title,
        categories: req.body.categories,
    }
    console.log(contest);
    try {
        var createdContest = await ContestService.createContest(contest);
        return res.status(201).json({
            status: 201,
            data: createdContest,
            message: "Successfully Created Contest"
        })
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: "Contest creation failed"
        });
    }
}

exports.updateContest = async function(req, res, next) {
    if(!req.body._id) {
        return res.status(400).json({
            status: 400,
            message: "Id must be present"
        });
    }

    var id = req.body._id;

    console.log(req.body);

    var contest = {
        id,
        title: req.body.title ? req.body.title : null,
        categories: req.body.categories ? req.body.categories : null
    }

    try {
        var updatedContest = await ContestService.updateContest(contest);
        return res.status(200).json({
            status: 200,
            data: updatedContest,
            message: "Successfully Created Contest"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

exports.removeContest = async function(req, res, next) {
    var id = req.params.id;

    try {
        var deleted = await ContestService.deleteContest(id)
        return res.status(204).json({
            status: 204,
            message: "Successfully Deleted Contest"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400, 
            message: e.message
        });
    }
}