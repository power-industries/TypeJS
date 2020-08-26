# TypeJS

Better TypeChecking in JavaScript using `instanceof`.

## Installation

Use the package manager [NPM](https://www.npmjs.com) to install TypeJS into your NodeJS Project.

```bash
npm install --save @power-industries/typejs
```

You can then import the module into your JavaScript File.

```javascript
const Type = require('@power-industries/typejs')
```

## Usage

TypeJS works by implementing Pseudo-Classes for some JavaScript Types. Those Pseudo-Classes allows for checking values directly with instanceof.

All the following examples return `true`:

```javascript
undefined instanceof Type.Undefined
null instanceof Type.Null
true instanceof Type.Boolean
1.1 instanceof Type.Number
NaN instanceof Type.NaN
Infinity instanceof Type.Infinity
"Hello World" instanceof Type.String
[] instanceof Type.Array
{} instanceof Type.Object
Symbol() instanceof Type.Symbol
100n instanceof Type.BigInt
() => {} instanceof Type.Function
```

This module also treats `Number`, `NaN` and `Infinity` as three different Types, as well as `Null`, `Array` and `Object`, as opposed to the `typeof` Operator.



This module does not include Types which are already available as Class-Instances in JavaScript, such as `Map` or `Set`.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License

MIT License

Copyright (c) 2020 Power Industries Corporation

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.