var binaryStringFlot64 = require( 'math-float64-to-binary-string' );
var fromBitsFloat64    = require( 'math-float64-from-bits' );

var binaryStringFlot32 = require( 'math-float32-to-binary-string' );
var fromBitsFloat32    = require( 'math-float32-from-bits' );

var binaryStringUint32 = require( 'math-uint32-to-binary-string' );

var binaryStringUint16 = require( 'math-uint16-to-binary-string' );

var binaryStringUint8  = require( 'math-uint8-bits' );

function uintBinaryStringToDecimal(number) {
	return parseInt(number, 2);
}

function numberProcess(numberToStringBinaryFunction,number){
	return {
		toArrayBinary : function(){
			return numberToStringBinaryFunction(number).split('').map(Number);
		},
		toStringBinary : function(){
			return numberToStringBinaryFunction(number);
		}
	}
}

function arrayProcess(binaryStringToNumberFunction,string){
	return binaryStringToNumberFunction(string)
}

var NumberArray = {
	uint8 : function(int8) {
		return numberProcess(binaryStringUint8,int8);
	},
	uint16 : function(int16) {
		return numberProcess(binaryStringUint16,int16);
	},
	uint32 : function(int32) {
		return numberProcess(binaryStringUint32,int32);
	},
	float32 : function(float16) {
		return numberProcess(binaryStringFlot32,float16);
	},
	float64 : function(float34) {
		return numberProcess(binaryStringFlot64,float34);
	}
	,
	arrayBinary : function(arrayInt8) {
		return {
			toUint8 : function(){
				return arrayProcess(uintBinaryStringToDecimal,arrayInt8.join(''))
			},
			toUint16 : function(){
				return arrayProcess(uintBinaryStringToDecimal,arrayInt8.join(''))
			},
			toUint32 : function(){
				return arrayProcess(uintBinaryStringToDecimal,arrayInt8.join(''))
			},
			toFloat32 : function(){
				return arrayProcess(fromBitsFloat32,arrayInt8.join(''))
			},
			toFloat64 : function(){
				return arrayProcess(fromBitsFloat64,arrayInt8.join(''))
			},

		}
	},

	StringBinary : function(arrayInt8) {
		return {
			toUint8 : function(){
				return arrayProcess(uintBinaryStringToDecimal,arrayInt8)
			},
			toUint16 : function(){
				return arrayProcess(uintBinaryStringToDecimal,arrayInt8)
			},
			toUint32 : function(){
				return arrayProcess(uintBinaryStringToDecimal,arrayInt8)
			},

			toFloat32 : function(){
				return arrayProcess(fromBitsFloat32,arrayInt8)
			},
			toFloat64 : function(){
				return arrayProcess(fromBitsFloat64,arrayInt8)
			},
		}
	},

}