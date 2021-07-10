import { Context } from "koa";
import PersonController from "../../../src/controllers/person";
import {
	VALID_BMI_REQUEST_BODY,
	VALID_BMI_REQUEST_RESPONSE
} from "../../../mocks";
import CONFIG from "../../../src/config";

const { STATUS_CODES } = CONFIG;

describe("Person controller", () => {

    describe("Welcome Method", () => {
    	it("welcome should return status 200 and welcome message", async () => {
	        const context = {status: undefined, body: undefined} as unknown as Context;
	        await PersonController.welcome(context);
	        expect(context.status).toBe(STATUS_CODES.SUCCESS);
	        expect(context.body).toEqual('The server is ready to process requests.');
	    });
    });

    describe("getBMIData Method", () => {
    	it("getBMIData should return status 200 and updated persons", async () => {
	        const context = {
	        	status: undefined,
	        	body: undefined,
	        	request: {
	        		body: VALID_BMI_REQUEST_BODY
	        	}
	        } as unknown as Context;
	        await PersonController.getBMIData(context);
	        expect(context.status).toBe(STATUS_CODES.SUCCESS);
	        expect(context.body).toEqual(VALID_BMI_REQUEST_RESPONSE);
	    });

	    it("getBMIData should return status 400 and invalid body", async () => {
	        const context = {
	        	status: undefined,
	        	body: undefined,
	        	request: {
	        		body: null
	        	},
	        	throw: jest.fn()
	        } as unknown as Context;
	        await PersonController.getBMIData(context);
	        expect(context.throw).toHaveBeenCalledWith(STATUS_CODES.BAD_REQUEST, 'Invalid data');
	    });
    });

});
