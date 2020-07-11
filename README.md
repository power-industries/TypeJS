# TypeJS
Better TypeChecking in JavaScript using 'instanceof'

## Installation

In a Terminal run:

```
npm install --save @power-industries/typejs
```

In the JavaScript File do:

```javascript
const Type = require('@power-industries/typejs');
```

## Usage

This package lets you check values against specific Datatypes, for example:

```javascript
let value = ['Hello World'];

if(value instanceof Type.Array)
    console.log(value[0]);
```

It currently supports the following Types:

* `Undefined`
* `Null`
* `Boolean`
* `Number`
* `NaN`
* `Infinity`
* `String`
* `Array`
* `Object`
* `Symbol`
* `BigInt`
* `Function`

Please note that this package treats Number, NaN and Infinity as 3 separate Types, as opposed to the built-in `typeof` Operator.
Please note that this package treats Array, Object and Null as 3 separate Types, as opposed to the built-in `typeof` Operator.

This package does not support other built-in Types who can be tested with `instanceof`. So instead of doing `value instanceof Type.Map` you would just do `value instanceof Map` as this behaviour is already existent in JS.