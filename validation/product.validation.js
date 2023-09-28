import Joi from 'joi';

const createSchema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
});

const updateSchema = Joi.object().keys({
    id: Joi.string().required(),
    name: Joi.string(),
    description: Joi.string(),
    price: Joi.number()
});

const getOneSchema = Joi.object().keys({
    id: Joi.string().required(),

});
export default { createSchema, updateSchema, getOneSchema };

