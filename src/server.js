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

app.use(bodyParser.json());

app.post('/api', function (req, res) {
  res.setHeader('Content-Type', 'application/json');
	for (i = 0; i < userDb.length; ++i) {
		if (userDb[i].user == req.body.username && userDb[i].password == req.body.password) {
			res.send({
				user: {
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