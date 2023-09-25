import Joi from 'joi';

const signupSchema = Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    mobile: Joi.number().required(),
    password: Joi.string().required(),
    gender: Joi.string().allow('male', 'female', 'other').required(),
});

const loginSchema = Joi.object().keys({
    mobile: Joi.number().required(),
    password: Joi.string().required(),
});

export default { signupSchema,loginSchema};