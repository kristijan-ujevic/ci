var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);

before(done => {
	server.on('serverStarted', () => {
		done();
	});
});

describe('Test', function () {
	it('should easily pass or fail', function (done) {
		chai.request(server)
			.get('/user')
			.end(function (err, res) {
				done();
			});
	});
});