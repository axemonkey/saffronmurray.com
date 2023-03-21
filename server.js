import {saffronmurrayApp} from './saffronmurray.com/app.js';

const env = process.env.NODE_ENV || 'development';

if (env === 'development') {
	saffronmurrayApp
		.listen(80);
} else if (env === 'production') {
	saffronmurrayApp
		.listen(process.env.PORT); // host specifies port number
}
