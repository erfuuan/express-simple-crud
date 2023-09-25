import Joi from "joi";
import responseBuilder from "../functions/responseBuilder.js";
import rules from "../validation/index.js";
import chalk from "chalk";
import md5 from 'md5'
import Service from '../service/index.js';
import CRYPTOGRAPHY from '../functions/cryptography.js';

export default {

    async signup(req, res) {
        try {
            const result = rules.authValidation.signupSchema.validate(req.body);
            console.log(result.value, result.error.details[0].message)
            if (result.error) { return responseBuilder.badRequest(res, result.value, result.error.details[0].message) }
            const data = await Joi.attempt(req.body, rules.authValidation.signupSchema);

            const userExist = await Service.CRUD.findOneRecord(
                'User',
                {
                    mobile: data.mobile,
                },
                []
            );
            if (userExist) {
                return responseBuilder.conflict(res, "", '.کاربری با این موبایل وارده در سیستم وجود دارد ');
            }

            const user = await Service.CRUD.create('User', {
                firstName: data.firstName,
                lastName: data.lastName,
                password: md5(data.password),
                mobile: data.mobile,
            });
            return responseBuilder.success(
                res,
                {
                    token: CRYPTOGRAPHY.generateAccessToken({ username: user._id }),
                    name: user.name,
                    username: user.username,
                    role: user.role,
                },
                'حساب کاربری شما با موفقیت ایجاد شد'
            );
        } catch (err) {
            console.log(chalk.underline.red("✖ err from catch of controller : "))
            console.log(chalk.red(err))
            console.log(chalk.underline.red("✖ err from catch of controller : "))
            return responseBuilder.internalErr(res)
        }
    },

    async login(req, res) {
        await f()
    }
}