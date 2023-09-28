import Service from '../service/index.js';
import responseBuilder from '../functions/responseBuilder.js';
import Joi from 'joi';
import Schema from '../validation/index.js';
import chalk from 'chalk';


export default {

    async getAll(req, res) {
        try {
            const newProduct = await Service.CRUD.getAll('Product');
            return responseBuilder.success(res, newProduct, '');
        } catch (err) {
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            console.log(chalk.red(err));
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            return responseBuilder.internalErr(res);
        }
    },

    async getOne(req, res) {
        const result = Schema.productValidation.getOneSchema.validate(req.params);
        if (result.error) { return responseBuilder.badRequest(res, req.params, result.error.message); }
        try {
            const { id } = await Joi.attempt(result.value, Schema.productValidation.getOneSchema);
            const ProductData = await Service.CRUD.findById('Product', id);
            if (!ProductData) { return responseBuilder.notFound(res, "", "محصول یافت نشد") }
            return responseBuilder.success(res, ProductData, '');
        } catch (err) {
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            console.log(chalk.red(err));
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            return responseBuilder.internalErr(res);
        }
    },

    async create(req, res) {
        const result = Schema.productValidation.createSchema.validate(req.body);
        if (result.error) { return responseBuilder.badRequest(res, req.body, result.error.message); }
        try {
            const data = await Joi.attempt(result.value, Schema.productValidation.createSchema);
            const checkExist = await Service.CRUD.findOneRecord('Product', { name: data.name })
            if (checkExist) { return responseBuilder.conflict(res, checkExist, "محصولی با این نام وجود دارد") }
            const newProduct = await Service.CRUD.create('Product', data);
            return responseBuilder.created(res, newProduct, 'محصول شما با موفقیت ایجاد شد.');
        } catch (err) {
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            console.log(chalk.red(err));
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            return responseBuilder.internalErr(res);
        }
    },

    async update(req, res) {
        const result = Schema.productValidation.updateSchema.validate({ ...req.body, ...req.params });
        if (result.error) { return responseBuilder.badRequest(res, req.body, result.error.message); }
        try {
            const data = await Joi.attempt(result.value, Schema.productValidation.updateSchema);
            const productExist = await Service.CRUD.findById('Product', req.params.id, []);
            if (!productExist) { return responseBuilder.notFound(res, '', 'پست یافت نشد'); }
            const updatedProduct = await Service.CRUD.updateById(
                'Product',
                data,
                data.id
            );
            return responseBuilder.success(res, updatedProduct, '.محصول شما با موفقیت ویرایش شد');
        } catch (err) {
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            console.log(chalk.red(err));
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            return responseBuilder.internalErr(res);
        }
    },

    async delete(req, res) {
        const result = Schema.productValidation.getOneSchema.validate(req.params);
        if (result.error) {
            return responseBuilder.badRequest(res, req.params, result.error.message);
        }
        try {
            const { id } = await Joi.attempt(result.value, Schema.productValidation.getOneSchema);
            await Service.CRUD.hardDelete('Product', id, { softDelete: true });
            return responseBuilder.success(res, '', 'مطلب با موفقیت حذف شد');
        } catch (err) {
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            console.log(chalk.red(err));
            console.log(chalk.underline.red('✖ err from catch of controller : '));
            return responseBuilder.internalErr(res);
        }
    }

}