var Contest = require('../models/contest.model');
var Category = require('../models/category.model');
var Contestant = require('../models/contestant.model');

_this = this;

exports.getContestants = async function(id) {
    try {
        // We need to reference the contest by the id,
        // but we also need to reference the category by
        // the id too. 
        var contestants = await Category.findById(id)
    }
}