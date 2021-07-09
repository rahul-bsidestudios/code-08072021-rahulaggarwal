import router from 'koa-joi-router';
const Joi = router.Joi;

const validator = {
    person: {
        bmi: {
            type: 'json' as const,
            body: Joi.array().items(
                Joi.object().keys({
                    Gender: Joi.string().required(),
                    HeightCm: Joi.number().required(),
                    WeightKg: Joi.number().required(),
                })
            ),
        }
    }
};

export default validator;