const joi = require('joi');

const playerSchema = joi.object({
    name: joi.string().required(),
    score: joi.number().required()
})

const validateInput = (data) => playerSchema.validate(data);

module.exports = { validateInput };