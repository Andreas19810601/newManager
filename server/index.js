var express = require('express');

const argv = require('minimist')(process.argv.slice(2));
const setup = require('../src/middlewares/frontendMiddleware');
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

const userTable = [
	{ id: '1', nickname: 'Doro', name: 'Number TWO', description: 'Software engineer', gender: 'female', plz: '545123', status: 'activ', index: '1' },
	{ id: '2', nickname: 'HalloDuDa', name: 'Jurij Koch', description: 'Software engineer', gender: 'male', plz: '22044', status: 'inactiv', index: '2' },
	{ id: '3', nickname: 'Wohu', name: 'Andreas Franck', description: 'Software engineer', gender: 'male', plz: '22041', status: 'activ', index: '3' },
	{ id: '4', nickname: 'HAHAHI', name: 'Heiner Lauterbach', description: 'Actor', gender: 'male', plz: '7745', status: 'inactiv', index: '4' },
	{ id: '5', nickname: 'jaisd', name: 'Bruce Willis', description: 'asdsgd', gender: 'male', plz: '545222', status: 'activ' },
	{ id: '6', nickname: 'ksgbv', name: 'Jessica Alba', description: 'afssgsdv', gender: 'female', plz: '54123', status: 'blocked' },
	{ id: '7', nickname: 'ekuz', name: 'Dexter Morgan', description: 'asdafsdafsa', gender: 'male', plz: '45623', status: 'blocked' },
	{ id: '8', nickname: 'oalsdj', name: 'huhu der Bär', description: 'xcvxcv', gender: 'male', plz: '98523', status: 'activ' },
	{ id: '9', nickname: 'jsbdc', name: 'tester eins', description: 'dfgfdgf', gender: 'female', plz: '5453', status: 'inactiv' },
	{ id: '10', nickname: 'jkcxj', name: 'tester zwei', description: 'erzergfs', gender: 'male', plz: '56541', status: 'activ' },
	{ id: '11', nickname: 'tewfsd', name: 'rechtsLinks', description: 'dfgdfbdf', gender: 'female', plz: '32564', status: 'inactiv' },
	{ id: '12', nickname: 'ngtzrhe', name: 'dritter von fünf', description: 'dfhrrthdbf', gender: 'male', plz: '12458', status: 'activ' },
	{ id: '1', nickname: 'Doro', name: 'Number One', description: 'Software engineer', gender: 'female', plz: '545123', status: 'activ' },
	{ id: '2', nickname: 'huhu', name: 'Jurij Koch', description: 'Software engineer', gender: 'male', plz: '22044', status: 'inactiv' },
	{ id: '3', nickname: 'Wohu', name: 'Andreas Franck', description: 'Software engineer', gender: 'male', plz: '22041', status: 'activ' },
	{ id: '4', nickname: 'HAHAHI', name: 'Heiner Lauterbach', description: 'Actor', gender: 'male', plz: '7745', status: 'inactiv' },
	{ id: '5', nickname: 'jaisd', name: 'Bruce Willis', description: 'asdsgd', gender: 'male', plz: '545222', status: 'activ' },
	{ id: '6', nickname: 'ksgbv', name: 'Jessica Alba', description: 'afssgsdv', gender: 'female', plz: '54123', status: 'blocked' },
	{ id: '7', nickname: 'ekuz', name: 'Dexter Morgan', description: 'asdafsdafsa', gender: 'male', plz: '45623', status: 'blocked' },
	{ id: '8', nickname: 'oalsdj', name: 'huhu der Bär', description: 'xcvxcv', gender: 'male', plz: '98523', status: 'activ' },
	{ id: '9', nickname: 'jsbdc', name: 'tester eins', description: 'dfgfdgf', gender: 'female', plz: '5453', status: 'inactiv' },
	{ id: '10', nickname: 'jkcxj', name: 'tester zwei', description: 'erzergfs', gender: 'male', plz: '56541', status: 'activ' },
	{ id: '11', nickname: 'tewfsd', name: 'rechtsLinks', description: 'dfgdfbdf', gender: 'female', plz: '32564', status: 'inactiv' },
	{ id: '12', nickname: 'ngtzrhe', name: 'dritter von fünf', description: 'dfhrrthdbf', gender: 'male', plz: '12458', status: 'activ' },
]

app.use(bodyParser.json());

app.post('/managerList', function (req, res){
	res.setHeader('Content-Type', 'application/json');
	res.send({
		list: userTable,
		successful: true,
	})
})

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