const Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

const signUpValidator = (data) => {
    const schema = Joi.object({
        firstName: Joi.string(),
        lastName: Joi.string(),
        sex: Joi.boolean(),
        phone: Joi.string().regex(/^[0-9]{11}$/).messages({'string.pattern.base': `Phone number must have 11 digits.`}).required(),
        school: Joi.string(),
        favoriteFields: Joi.string(),
        password: Joi.string(),
        role: Joi.string()
    })

    return schema.validate(data);
}

const reserve = (data) => {
    const schema = Joi.object({
        userId: Joi.objectId(),
        consultantId: Joi.objectId().required(),
        meetId: Joi.objectId(),
        detail: Joi.string()
    })
    return schema.validate(data);
}

module.exports = {signUpValidator, reserve}
