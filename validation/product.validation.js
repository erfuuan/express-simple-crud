import Joi from 'joi';

const createSchema = Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
});

const updateSchema = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),

});

const getOneSchema = Joi.object().keys({
    id: Joi.number().required(),

});
export default { createSchema, updateSchema, getOneSchema };

