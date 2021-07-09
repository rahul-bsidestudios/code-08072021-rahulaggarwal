import request from 'supertest';
import app from '../../src/app';
import CONFIG from '../../src/config';
import {
    VALID_BMI_REQUEST_BODY,
    VALID_BMI_REQUEST_RESPONSE
} from "../../mocks";

const { STATUS_CODES } = CONFIG;

describe('Welcome Route', () => {
    test('Welcome works', async () => {
        const response = await request(app.callback()).get('/');
        expect(response.status).toBe(STATUS_CODES.SUCCESS);
        expect(response.text).toBe('The server is ready to process requests.');
    });
});

describe('BMI Route', () => {
    test('get BMI data success', async () => {
        const response = await request(app.callback()).post('/persons/bmi').send(VALID_BMI_REQUEST_BODY);
        expect(response.status).toBe(STATUS_CODES.SUCCESS);
        expect(response.text).toBe(JSON.stringify(VALID_BMI_REQUEST_RESPONSE));
    });

    test('get BMI data failure null body', async () => {
        const response = await request(app.callback()).post('/persons/bmi').send(null);
        expect(response.status).toBe(STATUS_CODES.BAD_REQUEST);
    });

    test('get BMI data failure missing key', async () => {
        const response = await request(app.callback()).post('/persons/bmi').send([{ WeightKg: 70 }]);
        expect(response.status).toBe(STATUS_CODES.BAD_REQUEST);
    });
});