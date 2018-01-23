'use strict'
const ContestantService = require('../services/contestant.service');

_this = this;

exports.getContestants = async function(req, res, next) {
    const contest_id = req.params.contest_id;
    const category_id = req.params.category_id;
    
    try {
        var contestants = await ContestantService.getContestants(contest_id, category_id)
        return res.status(200).json({
            status:200,
            data: contestants,
            message: "Sucessfully fetch contestants"
        });
    } catch(e) {
        return res.status(400)
            .json({
                status: 400,
                message: e.message
            });
    }
}

exports.addContestant = async function(req, res, next) {
    const contest_id = req.params.contest_id;
    const category_id = req.params.category_id;

    var contestant = {
        title: req.body.title,
        url: req.body.url
    }

    try {
        var createdContestant = await ContestantService.createContestant(contest_id, category_id, contestant);
        return res.status(201).json({
            status: 201,
            data: createdContestant,
            message: "Successfully Created Contestant"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.updateContestant = async function(req, res, next) {
    const contest_id = req.params.contest_id;
    const category_id = req.params.category_id;
    const contestant_id = req.body.contestant_id;

    if (contestant_id) {
        return res.status(400).json({
            status: 400,
            message: "Id must be present"
        });
    }

    var contestant = {
        contestant_id,
        title: req.body.title ? req.body.title : null,
        url: req.body.url ? req.body.url : null
    }

    try {
        var updatedContestant = await ContestantService.updateContestant(contestant, contest_id, category_id);
        return res.status(200).json({
            status: 200,
            data: updatedContestant,
            message: "Successfully created contestant"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        })
    }
}

exports.deleteContestant = async function(req, res, next) {
    const contest_id = req.params.contest_id;
    const category_id = req.params.category_id;
    const contestant_id = req.params.contestant_id;

    try {
        var deleted = await ContestantService.deleteContestant(contest_id, category_id, contestant_id);
        return res.status(204).json({
            status: 204,
            message: "Successfuly deleted contestant"
        });
    } catch(e) {
        return res.status(400).json({
            status: 400,
            message: e.message
        });
    }
}

