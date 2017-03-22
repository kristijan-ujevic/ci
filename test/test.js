var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server');
var should = chai.should();

chai.use(chaiHttp);


describe('Test', function () {
	it('should easily pass or fail', function (done) {
		chai.request(server)
			.get('/user')
			.end(function (err, res) {
				res.should.have.status(200);
				done();
			});
	});
});