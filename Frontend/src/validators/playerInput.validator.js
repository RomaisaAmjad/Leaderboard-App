import Joi from 'joi';

const playerInputSchema = Joi.object({
  name: Joi.string().min(3).max(20).required(),
  score: Joi.number().integer().min(0).required()
});

export function validatePlayerInput(data) {
  return playerInputSchema.validate(data);
}
