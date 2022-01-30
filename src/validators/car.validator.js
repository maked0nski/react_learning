import Joi from "joi";

export const CarValidator = Joi.object({
    model: Joi.string().regex(new RegExp('^[[a-zA-ZА-яёЁіІїЇґ]{1,20}$')).required().messages({
        'string.empty':'Поле "model" не може бути порожнім',
        'string.pattern.base':'Тільки букви мин 1 макс 20'
    }),
    price:Joi.number().min(0).max(1000000).messages({
        'number.base':'Ціна може бути від 1 - 1 000 000',
        'number.min':'Ціна має бути більше або рівне 0',
        'number.max':'Ціна має бути не більше 1 000 000'
    }),
    year: Joi.number().min(1900).max(new Date().getFullYear()).required().messages({
        'string.empty':'Дане поле не може бути порожнім',
        'number.base':'Рік може бути від 1900 до теперішнього',
        'number.min':'Рік має бути від 1900',
        'number.max':`Рік має бути не більше тепершнього ${new Date().getFullYear()}`
    })
})