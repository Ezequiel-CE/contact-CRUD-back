const Joi = require("joi");

const contactValidation = (data) => {
  const schema = Joi.object({
    firstName: Joi.string().min(3).max(255).required(),
    lastName: Joi.string().min(3).max(255).required(),
    phone: Joi.string().min(5).max(255).required(),
    mail: Joi.string().min(5).max(200).required().email(),
    adress: Joi.string().allow(null, "").max(1024),
    description: Joi.string().allow(null, "").max(1024),
    imageUrl: Joi.string().allow(null, "").max(1024),
  });
  return schema.validate(data);
};

module.exports = contactValidation;
