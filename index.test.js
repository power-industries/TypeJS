const Type = require('./index');

describe('Testing TypeJS', () => {
	test('Testing Booleans', () => {
		expect(true instanceof Type.Boolean).toBe(true);
		expect(false instanceof Type.Boolean).toBe(true);
	});

	test('Testing Numerics', () => {
		expect(18 instanceof Type.Number).toBe(true);
		expect(18.101 instanceof Type.Number).toBe(true);
		expect(101n instanceof Type.BigInt).toBe(true);
		expect(Infinity instanceof Type.Infinity).toBe(true);
		expect(-Infinity instanceof Type.Infinity).toBe(true);
		expect(NaN instanceof Type.NaN).toBe(true);
	});

	test('Testing Strings', () => {
		expect('Hello World' instanceof Type.String).toBe(true);
	});

	test('Testing Symbols', () => {
		expect(Symbol('Test 1') instanceof Type.Symbol).toBe(true);
		expect(Symbol('Test 2') instanceof Type.Symbol).toBe(true);
	});

	test('Testing Functions', () => {
		expect((() => {}) instanceof Type.Function).toBe(true);
		expect((function () {}) instanceof Type.Function).toBe(true);
	});

	test('Testing Arrays', () => {
		expect([] instanceof Type.Array).toBe(true);
		expect((new Array()) instanceof Type.Array).toBe(true);
	});

	test('Testing Objects', () => {
		expect({} instanceof Type.Object).toBe(true);
		expect((new Object()) instanceof Type.Object).toBe(true);
	});

	test('Testing special Values', () => {
		expect(null instanceof Type.Null).toBe(true);
		expect(undefined instanceof Type.Undefined).toBe(true);
	});
});