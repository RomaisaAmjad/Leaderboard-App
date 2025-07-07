const {asyncWrapper} = require('../middlewares/asyncWrapper.middleware');
const {Player} = require('../models');

// Controller to handle leaderboard operations
exports.getAllPlayers = asyncWrapper(async (req, res) => {
    const players = await Player.findAll({ order: [['score', 'DESC']]
    });
    res.status(200).json(players);
});

exports.addPlayer = asyncWrapper(async (req, res) => {
    const { name, score } = req.body;
    const newPlayer = await Player.create({ name, score });
    res.status(201).json(newPlayer);
}); 

exports.deletePlayer = asyncWrapper(async (req, res) => {
    const { id } = req.params;
    const player = await Player.findByPk(id);
    await player.destroy();
    res.status(204).send();
});