const Joi = require('joi');

exports.schema = Joi.object({
  lon: Joi.string().required(),
  lat: Joi.string().required(),
});