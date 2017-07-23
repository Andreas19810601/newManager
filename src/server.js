var express = require('express');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('./middlewares/frontendMiddleware');
const isDev = process.env.NODE_ENV !== 'production';
const ngrok = (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel ? require('ngrok') : false;
const resolve = require('path').resolve;
const app = express();
const bodyParser = require('body-parser');

const userDb = [
	{
		user: 'jk',
		password: 'pass',
		displayName: 'Jurij Koch'
	},
	{
		user: 'af',
		password: 'pass',
		displayName: 'Andreas Franck'
	}
]

// app.post('/api', function (req, res) {
//   console.log(req.body);
//   res.setHeader('Content-Type', 'application/json');
//   res.send('{ "successful": true }');
// });

app.use(bodyParser.json());

app.post('/api', function (req, res) {
  console.log('1 ', req.body.username)
  console.log('2 ', req.body.password)
  res.setHeader('Content-Type', 'application/json');
	for (i = 0; i < userDb.length; ++i) {
		if (userDb[i].user == req.body.username && userDb[i].password == req.body.password) {
			res.send({
				user: {
					userName: userDb[i].user,
					displayName: userDb[i].displayName,
					role: 'ADMIN',
				},
				successful: true
			})
			return;
		}
	}
	res.send({
		successful: false
	});
});

app.listen(3001, function () {
  console.log('Example app listening on port 3001!');
});




// import express from 'express';
// import path from 'path';
// import bodyParser from 'body-parser';

// import webpack from 'webpack';
// import webpackMiddleware from 'webpack-dev-middleware';
// import webpackHotMiddleware from 'webpack-hot-middleware';
// import webpackConfig from '../webpack.config.dev';

// import users from './routes/users';
// import auth from './routes/auth';
// import events from './routes/events';

// let app = express();

// app.use(bodyParser.json());

// app.use('/api/users', users);
// app.use('/api/auth', auth);
// app.use('/api/events', events);

// const compiler = webpack(webpackConfig);

// app.use(webpackMiddleware(compiler, {
//   hot: true,
//   publicPath: webpackConfig.output.publicPath,
//   noInfo: true
// }));
// app.use(webpackHotMiddleware(compiler));

// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, './index.html'));
// });

// app.listen(3000, () => console.log('Running on localhost:3000'));