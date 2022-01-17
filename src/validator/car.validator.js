import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇґҐ]{1,20}$')).required()
        .messages({
        'string.empty':'Дане поле не може бути пустим',
        'string.pattern.base':'Поле приймає тільки букви мин 1 макс 20'
    }),
    price:Joi.number().min(0).max(1000000)
        .messages({
        'number.base':'Ціна може бути від 1 - 1 000 000',
        'number.min':'Ціна має бути більше або рівне 0',
        'number.max':'Ціна має бути не більше 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required()
        .messages({
        'number.base':'Роки можна вказувати від 1900 року до теперішнього'
    })
})