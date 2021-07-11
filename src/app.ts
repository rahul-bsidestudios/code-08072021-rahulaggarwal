import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
import compression from 'koa-compress';
import Router from './routes';

const app = new Koa();

// Enable cors with default options
app.use(cors());

// Enable compression
app.use(compression({
    filter (content_type) {
        return /json/i.test(content_type);
    },
    threshold: 2048,
    gzip: {
        flush: require('zlib').constants.Z_SYNC_FLUSH
    },
    deflate: {
        flush: require('zlib').constants.Z_SYNC_FLUSH,
    },
    br: false // disable brotli
}));

// Enable bodyParser with extended json body limit
app.use(bodyParser({ jsonLimit: '5MB' }));

app.use(Router.middleware());

export = app;