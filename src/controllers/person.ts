import { BaseContext } from 'koa';
import CONFIG from '../config';
import {
    calculateBMI,
    findCategoryAndRisk,
    checkIfOverweight
} from '../utils/helpers';


export default class PersonController {

    /**
     * Controller to check if the server is responding
     *
     * @return {string} with welcome message
     */
    public static async welcome(ctx: BaseContext) {
        const { STATUS_CODES } = CONFIG;
        ctx.status = STATUS_CODES.SUCCESS;
        ctx.body = 'The server is ready to process requests.';
    }

    /**
     * Calculate BMI and append that to the input body data
     *
     * @param {object} body an array of person objects containing weight, gender and height keys
     * @return {object} body with an array of person objects including bmi, overweight and the count of overweight persons
     */
    public static async getBMIData(ctx: BaseContext) {
        const { STATUS_CODES } = CONFIG;
        try {
            const { body: inputData } = ctx.request;

            if (!inputData || !Array.isArray(inputData)) {
                ctx.throw(STATUS_CODES.BAD_REQUEST, 'Invalid data');
            }

            let overweightCount = 0;
            const results = inputData.map(person => {
                const { HeightCm: height, WeightKg: weight } = person;
                const bmi = calculateBMI(weight, height);
                const { risk, category } = findCategoryAndRisk(bmi);
                if (checkIfOverweight(category)) {
                    overweightCount++;
                }
                return {
                    ...person,
                    BMI: parseFloat(bmi.toFixed(2)),
                    BMICategory: category,
                    HealthRisk: risk
                };
            });

            ctx.status = STATUS_CODES.SUCCESS;
            ctx.body = { results, overweightCount };
        }
        catch (error) {
            const { status = STATUS_CODES.SERVER_ERROR, message } = error;
            ctx.throw(status, message);
        }
    }
}
