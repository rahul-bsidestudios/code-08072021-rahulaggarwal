import router from 'koa-joi-router';
import * as controllers from './controllers';
import validator from './utils/validator';

const routes = router();

// Welcome route
routes.get('/', controllers.person.welcome);

// Person routes
routes.post('/persons/bmi', { validate: validator.person.bmi }, controllers.person.getBMIData);

export default routes;