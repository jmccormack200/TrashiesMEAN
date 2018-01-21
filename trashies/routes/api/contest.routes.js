'use strict';
const express = require('express');

const router = express.Router();

const ContestController = require('../../controllers/contest.controller');
const CategoryController = require('../../controllers/category.controller');
const ContestantController = require('../../controllers/contestant.controller')

router.get('/', ContestController.getContests);
router.post('/', ContestController.createContest);
router.put('/', ContestController.updateContest);
router.delete('/:id', ContestController.removeContest);

router.get('/:id', CategoryController.getCategories);
router.post('/:id', CategoryController.addCategory);
router.put('/:id', CategoryController.updateCategory);
router.delete('/:contest_id/:category_id', CategoryController.deleteCategory);

router.get('/:contest_id/:category_id', ContestantController.getContestants);
router.post('/:contst_id/:category_id', ContestantController.createContestant);
router.put('/:contest_id/:category_id', ContestantController.updateContestant);
router.delete('/:contest_id/:category_id/:contestant_id', ContestantController.deleteContestant);

module.exports = router;