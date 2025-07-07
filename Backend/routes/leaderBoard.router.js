const {Router} = require('express');
const leaderboardController = require('../controllers/leaderboard.controller');
const {validateData} = require('../middlewares/validateData.middleware');
const {validateInput}= require('../validators/Player.validator');
const {accessControl} = require('../middlewares/accessControl.middleware');

const leaderboardRouter = Router();

leaderboardRouter.get('/', leaderboardController.getAllPlayers);
leaderboardRouter.post('/', validateData(validateInput), leaderboardController.addPlayer);
leaderboardRouter.delete('/:id', accessControl, leaderboardController.deletePlayer);

module.exports = leaderboardRouter;
