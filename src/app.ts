import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from './routes';

const app = new Koa();

// Enable cors with default options
app.use(cors());

// Enable bodyParser with extended json body limit
app.use(bodyParser({ jsonLimit: '5MB' }));

app.use(Router.middleware());

export = app;