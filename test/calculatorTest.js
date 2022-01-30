var calculation = require('../app/calculator');
var chai = require('chai');
var expect = chai.expect;

var m = 20;
var	n = 5;

describe('Calculator module testing', function () {
	it('Add method testing', () => {
		expect(calculation.add(m, n)).to.be.equal(25);
		// expect(calc.add(m, n)).to.be.equal(5, 'Fails the test');
	});
	it('Multiply method testing', () => {
		expect(calculation.mul(m, n)).to.be.equal(100);
		// expect(calc.multiply(m, n)).to.be.equal(15, 'Fails the test');
	});
	it('Divide method testing', () => {
		expect(calculation.div(m, n)).to.be.equal(4);
		// expect(calculation.divide(m, n)).to.be.equal(2, 'Fails the test');
	});
	it('Subtract method testing', () => {
		expect(calculation.sub(m, n)).to.be.equal(15);
		// expect(calculation.sub(m, n)).to.be.equal(25, 'Fails the test');
	});
});
