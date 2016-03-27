var expect    = require("chai").expect;
var doubleConversion = require('../src/index.js');
describe("uint8 toArrayBinary", function() {

	it("uint8 toArrayBinary with number 5", function() {
		var array = doubleConversion.uint8(5).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,1,0,1]);
	});

	it("uint8 toArrayBinary with number 14", function() {
		var array = doubleConversion.uint8(14).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,1,1,1,0]);
	});

	it("uint8 toArrayBinary with number 37", function() {
		var array = doubleConversion.uint8(37).toArrayBinary();
		expect(array).to.deep.equal([0,0,1,0,0,1,0,1]);
	});

	it("uint8 toArrayBinary with number 96", function() {
		var array = doubleConversion.uint8(96).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,0,0,0,0,0]);
	});

	it("uint8 toArrayBinary with number 165", function() {
		var array = doubleConversion.uint8(165).toArrayBinary();
		expect(array).to.deep.equal([1,0,1,0,0,1,0,1]);
	});

	it("uint8 toArrayBinary with number 254", function() {
		var array = doubleConversion.uint8(254).toArrayBinary();
		expect(array).to.deep.equal([1,1,1,1,1,1,1,0]);
	});

});


describe("uint16 toArrayBinary", function() {

	it("uint16 toArrayBinary with number 5", function() {
		var array = doubleConversion.uint16(5).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1]);
	});

	it("uint16 toArrayBinary with number 345", function() {
		var array = doubleConversion.uint16(345).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1]);
	});

	it("uint16 toArrayBinary with number 1548", function() {
		var array = doubleConversion.uint16(1548).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0]);
	});

	it("uint16 toArrayBinary with number 25434", function() {
		var array = doubleConversion.uint16(25434).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,0,0,0,1,1,0,1,0,1,1,0,1,0]);
	});

	it("uint16 toArrayBinary with number 65535", function() {
		var array = doubleConversion.uint16(65535).toArrayBinary();
		expect(array).to.deep.equal([1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]);
	});

});

describe("uint32 toArrayBinary", function() {

	it("uint32 toArrayBinary with number 5", function() {
		var array = doubleConversion.uint32(5).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1]);
	});

	it("uint32 toArrayBinary with number 75535", function() {
		var array = doubleConversion.uint32(75535).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,1]);
	});

	it("uint32 toArrayBinary with number 462178", function() {
		var array = doubleConversion.uint32(462178).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0]);
	});

	it("uint32 toArrayBinary with number 8624789", function() {
		var array = doubleConversion.uint32(8624789).toArrayBinary();
		expect(array).to.deep.equal([0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1]);
	});

	it("uint32 toArrayBinary with number 4189258753", function() {
		var array = doubleConversion.uint32(4189258753).toArrayBinary();
		expect(array).to.deep.equal([1,1,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1]);
	});


});