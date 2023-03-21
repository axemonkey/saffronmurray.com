import express from 'express';
import hbs from 'handlebars';
import {engine} from 'express-handlebars';
import path from 'path';

const appFolder = `${path.resolve()}/saffronmurray.com`;
const saffronmurrayApp = express();

// CSP
saffronmurrayApp.use(function(req, res, next) {
	res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-eval'");
	return next();
});

saffronmurrayApp.engine('hbs', engine({
	extname: 'hbs',
}));
saffronmurrayApp.set('views', `${appFolder}/views`);
saffronmurrayApp.set('view engine', 'hbs');
saffronmurrayApp.use(express.static(`${appFolder}/public`));

saffronmurrayApp.get('/', (req, res) => {
	res.render('index');
});
// saffronmurrayApp.get('/party', (req, res) => {
//   res.setHeader('Cache-Control', 'max-age=1');
//   res.render('party', {
//     layout: 'party-layout',
//   });
// });

export {saffronmurrayApp};
