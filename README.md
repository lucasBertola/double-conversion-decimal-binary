Double Conversion Decimal Binary [![Build Status](https://api.travis-ci.org/lucasBertola/double-conversion-decimal-binary.svg?branch=master)](https://travis-ci.org/lucasBertola/double-conversion-decimal-binary)
==================
A simple but powerful libraire to convert decimals to binary and binary to decimal


##Usage
#### Require the module
```javascript
var doubleConversion = require('double-conversion-decimal-binary');
```

#### uint8 to Array Binary
```javascript
doubleConversion.uint8(5).toArrayBinary(); // [0,0,0,0,0,1,0,1]
```

#### uint8 to String Binary
```javascript
doubleConversion.uint8(5).toStringBinary(); // "00000101"
```
#### Array Binary to uint8
```javascript
doubleConversion.arrayBinary([0,0,0,0,0,1,0,1]).toUint8(); // 5
```

#### String Binary to uint8
```javascript
doubleConversion.StringBinary("00000101").toUint8(); // 5
```
#### uint8, uint16, uint32, float32, float64
In above exemples, you can see how tu use uint8. But other type of number works in the same way!

```javascript
doubleConversion.uint8(5).toArrayBinary();
doubleConversion.uint16(5).toArrayBinary();
doubleConversion.uint32(5).toArrayBinary();
doubleConversion.float32(5).toArrayBinary();
doubleConversion.float64(5).toArrayBinary();

doubleConversion.uint8(5).toStringBinary();
doubleConversion.uint16(5).toStringBinary();
doubleConversion.uint32(5).toStringBinary();
doubleConversion.float32(5).toStringBinary();
doubleConversion.float64(5).toStringBinary();

doubleConversion.arrayBinary([0,0,0,0,0,1,0,1]).toUint8();
doubleConversion.arrayBinary([0,0,0,0,0...lot of numbers..0,1,0,1]).toUint16();
doubleConversion.arrayBinary([0,0,0,0,0...lot of numbers..0,1,0,1]).toUint32();
doubleConversion.arrayBinary([0,0,0,0,0...lot of numbers..0,1,0,1]).toFloat32();
doubleConversion.arrayBinary([0,0,0,0,0...lot of numbers..0,1,0,1]).toFloat64();

doubleConversion.StringBinary("00000101").toUint8();
doubleConversion.StringBinary("000...lot of numbers...00101").toUint16();
doubleConversion.StringBinary("000...lot of numbers...00101").toUint32();
doubleConversion.StringBinary("000...lot of numbers...00101").toFloat32();
doubleConversion.StringBinary("000...lot of numbers...00101").toFloat64();
```

### What is differences between uint8, uint16, uint32, float32 and  float64 ?

http://my.math.wsu.edu/help/matlab/uint8.html

https://en.wikipedia.org/wiki/IEEE_754-1985


##Installation

You will can install **Double Conversion Decimal Binary** with [npm](https://www.npmjs.com/package/double-conversion-decimal-binary):

```cmd
npm install double-conversion-decimal-binary --save
```


##Contribute

**Double Conversion Decimal Binary** is an Open Source project that started in Lyon, French. Anybody in the world is welcome to contribute to the development of the project.

If you want to contribute feel free to send PR's, just make sure to run the **gulp test** task before submiting it. This way you'll run all the test specs .

<3




