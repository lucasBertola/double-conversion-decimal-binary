var expect    = require("chai").expect;
var doubleConversion = require('../src/index.js');
describe("toArrayBinary", function() {

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


describe("float32 toArrayBinary", function() {

	it("float32 toArrayBinary with number 5", function() {
		var array = doubleConversion.float32(5).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	});

	it("float32 toArrayBinary with number 5.5", function() {
		var array = doubleConversion.float32(5.5).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	});

	it("float32 toArrayBinary with number 4865.5614285", function() {
		var array = doubleConversion.float32(4865.561).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0]);
	});

	it("float32 toArrayBinary with number 84865.5614285", function() {
		var array = doubleConversion.float32(84865.51).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1]);
	});

	it("float32 toArrayBinary with number -84865.5614285", function() {
		var array = doubleConversion.float32(-96145.42).toArrayBinary();
		expect(array).to.deep.equal([1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1]);
	});

	it("float32 toArrayBinary with number 303615670000000000000000000000000000000", function() {
		var array = doubleConversion.float32(303615670000000000000000000000000000000).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0]);
	});

	it("float32 toArrayBinary with number 3.0361567e38", function() {
		var array = doubleConversion.float32(3.0361567e38).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0]);
	});



});


describe("float64 toArrayBinary", function() {

	it("float64 toArrayBinary with number 5", function() {
		var array = doubleConversion.float64(5).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	});

	it("float64 toArrayBinary with number 842.3541257893125", function() {
		var array = doubleConversion.float64(842.3541257893125).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0]);
	});

	it("float64 toArrayBinary with number 3.036156748532156e38", function() {
		var array = doubleConversion.float64(3.036156748532156e38).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0]);
	});

	it("float64 toArrayBinary with number 1.036156748532156e308", function() {
		var array = doubleConversion.float64(1.036156748532156e308).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0]);
	});



});
});


























describe("toStringbinary", function() {

	describe("uint8 toStringBinary", function() {

		it("uint8 toStringBinary with number 5", function() {
			var array = doubleConversion.uint8(5).toStringBinary();
			expect(array).to.deep.equal("00000101");
		});

		it("uint8 toStringBinary with number 14", function() {
			var array = doubleConversion.uint8(14).toStringBinary();
			expect(array).to.deep.equal("00001110");
		});

		it("uint8 toStringBinary with number 37", function() {
			var array = doubleConversion.uint8(37).toStringBinary();
			expect(array).to.deep.equal("00100101");
		});

		it("uint8 toStringBinary with number 96", function() {
			var array = doubleConversion.uint8(96).toStringBinary();
			expect(array).to.deep.equal("01100000");
		});

		it("uint8 toStringBinary with number 165", function() {
			var array = doubleConversion.uint8(165).toStringBinary();
			expect(array).to.deep.equal("10100101");
		});

		it("uint8 toStringBinary with number 254", function() {
			var array = doubleConversion.uint8(254).toStringBinary();
			expect(array).to.deep.equal("11111110");
		});

	});


describe("uint16 toStringBinary", function() {

	it("uint16 toStringBinary with number 5", function() {
		var array = doubleConversion.uint16(5).toStringBinary();
		expect(array).to.deep.equal("0000000000000101");
	});

	it("uint16 toStringBinary with number 345", function() {
		var array = doubleConversion.uint16(345).toStringBinary();
		expect(array).to.deep.equal("0000000101011001");
	});

	it("uint16 toStringBinary with number 1548", function() {
		var array = doubleConversion.uint16(1548).toStringBinary();
		expect(array).to.deep.equal("0000011000001100");
	});

	it("uint16 toStringBinary with number 25434", function() {
		var array = doubleConversion.uint16(25434).toStringBinary();
		expect(array).to.deep.equal("0110001101011010");
	});

	it("uint16 toStringBinary with number 65535", function() {
		var array = doubleConversion.uint16(65535).toStringBinary();
		expect(array).to.deep.equal("1111111111111111");
	});

});

describe("uint32 toStringBinary", function() {

	it("uint32 toStringBinary with number 5", function() {
		var array = doubleConversion.uint32(5).toStringBinary();
		expect(array).to.deep.equal("00000000000000000000000000000101");
	});

	it("uint32 toStringBinary with number 75535", function() {
		var array = doubleConversion.uint32(75535).toStringBinary();
		expect(array).to.deep.equal("00000000000000010010011100001111");
	});

	it("uint32 toStringBinary with number 462178", function() {
		var array = doubleConversion.uint32(462178).toStringBinary();
		expect(array).to.deep.equal("00000000000001110000110101100010");
	});

	it("uint32 toStringBinary with number 8624789", function() {
		var array = doubleConversion.uint32(8624789).toStringBinary();
		expect(array).to.deep.equal("00000000100000111001101010010101");
	});

	it("uint32 toStringBinary with number 4189258753", function() {
		var array = doubleConversion.uint32(4189258753).toStringBinary();
		expect(array).to.deep.equal("11111001101100110000010000000001");
	});


});


describe("float32 toArrayBinary", function() {

	it("float32 toArrayBinary with number 5", function() {
		var array = doubleConversion.float32(5).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	});

	it("float32 toArrayBinary with number 5.5", function() {
		var array = doubleConversion.float32(5.5).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	});

	it("float32 toArrayBinary with number 4865.5614285", function() {
		var array = doubleConversion.float32(4865.561).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0]);
	});

	it("float32 toArrayBinary with number 84865.5614285", function() {
		var array = doubleConversion.float32(84865.51).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1]);
	});

	it("float32 toArrayBinary with number -84865.5614285", function() {
		var array = doubleConversion.float32(-96145.42).toArrayBinary();
		expect(array).to.deep.equal([1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1]);
	});

	it("float32 toArrayBinary with number 303615670000000000000000000000000000000", function() {
		var array = doubleConversion.float32(303615670000000000000000000000000000000).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0]);
	});

	it("float32 toArrayBinary with number 3.0361567e38", function() {
		var array = doubleConversion.float32(3.0361567e38).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0]);
	});



});


describe("float64 toArrayBinary", function() {

	it("float64 toArrayBinary with number 5", function() {
		var array = doubleConversion.float64(5).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
	});

	it("float64 toArrayBinary with number 842.3541257893125", function() {
		var array = doubleConversion.float64(842.3541257893125).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0]);
	});

	it("float64 toArrayBinary with number 3.036156748532156e38", function() {
		var array = doubleConversion.float64(3.036156748532156e38).toArrayBinary();
		expect(array).to.deep.equal([0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0]);
	});

	it("float64 toArrayBinary with number 1.036156748532156e308", function() {
		var array = doubleConversion.float64(1.036156748532156e308).toArrayBinary();
		expect(array).to.deep.equal([0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0]);
	});



});
});