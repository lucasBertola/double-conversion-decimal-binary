var binaryString = require( 'math-float64-to-binary-string' );
var fromBits = require( 'math-float64-from-bits' );


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
	int8 : function(int8) {
		return numberProcess(binaryString,int8);
	},
	int16 : function(int16) {
		return numberProcess(binaryString,int16);
	},
	int32 : function(int32) {
		return numberProcess(binaryString,int32);
	},
	float32 : function(float16) {
		return numberProcess(binaryString,float16);
	},
	float64 : function(float34) {
		return numberProcess(binaryString,float34);
	}
	,
	arrayBinary : function(arrayInt8) {
		return {
			toInt8 : function(){
				return arrayProcess(fromBits,arrayInt8.join(''))
			},
			toInt16 : function(){
				return arrayProcess(fromBits,arrayInt8.join(''))
			},
			toInt32 : function(){
				return arrayProcess(fromBits,arrayInt8.join(''))
			},
			toFloat32 : function(){
				return arrayProcess(fromBits,arrayInt8.join(''))
			},
			toFloat64 : function(){
				return arrayProcess(fromBits,arrayInt8.join(''))
			},

		}
	},

	StringBinary : function(arrayInt8) {
		return {
			toInt8 : function(){
				return arrayProcess(fromBits,arrayInt8)
			},
			toInt16 : function(){
				return arrayProcess(fromBits,arrayInt8)
			},
			toInt32 : function(){
				return arrayProcess(fromBits,arrayInt8)
			},

			toFloat32 : function(){
				return arrayProcess(fromBits,arrayInt8)
			},
			toFloat64 : function(){
				return arrayProcess(fromBits,arrayInt8)
			},
		}
	},

}