module.exports = {
	Undefined: class {
		static [Symbol.hasInstance](instance) {
			return instance === undefined;
		}
	},
	Null: class {
		static [Symbol.hasInstance](instance) {
			return instance === null;
		}
	},
	Boolean: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'boolean';
		}
	},
	Number: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'number' ? Number.isFinite(instance) : false;
		}
	},
	Infinity: class {
		static [Symbol.hasInstance](instance) {
			return instance === Infinity || instance === -Infinity;
		}
	},
	NaN: class {
		static [Symbol.hasInstance](instance) {
			return Number.isNaN(instance);
		}
	},
	String: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'string';
		}
	},
	Array: class {
		static [Symbol.hasInstance](instance) {
			return Array.isArray(instance);
		}
	},
	Object: class {
		static [Symbol.hasInstance](instance) {
			return Object.prototype.toString.call(instance) === '[object Object]';
		}
	},
	Symbol: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'symbol';
		}
	},
	BigInt: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'bigint';
		}
	},
	Function: class {
		static [Symbol.hasInstance](instance) {
			return typeof instance === 'function';
		}
	}
}