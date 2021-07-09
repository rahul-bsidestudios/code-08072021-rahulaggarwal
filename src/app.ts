import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import Router from './routes';

const app = new Koa();

// Enable cors with default options
app.use(cors());

// Enable bodyParser with default options
app.use(bodyParser());

app.use(Router.middleware());

export = app;