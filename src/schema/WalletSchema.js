import JoiDate from '@joi/date';
import JoiBase from 'joi';



const Joi = JoiBase.extend(JoiDate);

export const walletSchema = Joi.object({
    date: Joi.date().format("DD/MM").required(),
    desc: Joi.string().required(),
    value: Joi.number().required(),
    type: Joi.string().valid('in', 'out').required()
})