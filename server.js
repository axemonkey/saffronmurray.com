import express from 'express';
import vhost from 'vhost';

import {adammurrayApp} from './adammurray.name/app.js';
import {clivemurrayApp} from './clivemurray.com/app.js';
import {codenamesApp} from './codenames.clivemurray.com/app.js';
import {saffronmurrayApp} from './saffronmurray.com/app.js';

const app = express();
const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	app
		.use(vhost('adammurray.node', adammurrayApp))
		.use(vhost('clivemurray.node', clivemurrayApp))
		.use(vhost('codenames.clivemurray.node', codenamesApp))
		.use(vhost('saffronmurray.node', saffronmurrayApp))
		.listen(80);
} else if (env === 'production') {
	app
		.use(vhost('adammurray.name', adammurrayApp))
		.use(vhost('clivemurray.com', clivemurrayApp))
		.use(vhost('codenames.clivemurray.com', codenamesApp))
		.use(vhost('saffronmurray.com', saffronmurrayApp))
		.listen(8080);
}

app.get('/', function (req, res) {
	res.send('These aren\'t the droids you\'re looking for, champ.');
});
