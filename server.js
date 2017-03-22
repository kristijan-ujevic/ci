
"use strict";

const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const config = require('config');
const port = config.server.port;
const db = require('./models');

//don't show the log when it is test
if (config.util.getEnv('NODE_ENV') !== 'test') {
	app.use(morgan('combined'));
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/json' }));

//placeholder middleware
app.use(function (req, res, next) {
	next()
})

//initialize routes
require('./controllers/routes')(app);

db.sequelize.sync({ force: true }).then(function () {
	app.listen(port, function () {
		console.log(`Server is listening on port ${port}`);
		app.emit('serverStarted');
	});
});

/*
db.sequelize.sync({ force: false })
	.then(function () {
		var server = app.listen(port);
		console.log(`Server is listening on ${port}`);
	})
	.catch(console.error);
*/

module.exports = app; // for testing