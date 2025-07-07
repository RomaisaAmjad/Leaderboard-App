const {Player} = require('../models');

exports.accessControl = async (req, res, next) => {

    const {id} = req.params;
    const player = await Player.findByPk(id);
    if (!player) {
        return res.status(404).send("Player not found.");
    }

    req.player = player;
    next();

};
