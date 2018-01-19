var express = require('express');

var router = express.Router();

var ContestController = require('../../controllers/contest.controller');
var CategoryController = require('../../controllers/category.controller');

router.get('/', ContestController.getContests);
router.post('/', ContestController.createContest);
router.put('/', ContestController.updateContest);
router.delete('/:id', ContestController.removeContest);

router.get('/:id', CategoryController.getCategories);
router.post('/:id', CategoryController.addCategory);
module.exports = router;