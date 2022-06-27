// Functions - declration and invocations
/**
 * Function add - add two numbers
 * @param a - first number
 * @param b - second number
 * @returns the sum of the two numbers
 */
 function add (a, b) {
	return a + b;
}

const a = 1;
const b = 2;
const c = add(a, b);
// Print variables/strings/objects to the console
console.log(c); // 3

// Anonymous functions
/**
 * Anonymous add - add two numbers
 * @param a - first number
 * @param b - second number
 * @returns the sum of the two numbers
 */
const addAnon = function (a, b) {
	return a + b;
};

/**
 * Named anonymous add - add two numbers
 * @param a - first number
 * @param b - second number
 * @returns the sum of the two numbers
 */
const addNamedAnon = function add (a, b) {
	return a + b;
};

// Arrow functions
/**
 * Anonymous arrow add - add two numbers
 * @param a - first number
 * @param b - second number
 * @returns the sum of the two numbers
 */
const addArrow = (a, b) => {
	return a + b;
};

/**
 * Anonymous short arrow add - add two numbers
 * @param a - first number
 * @param b - second number
 * @returns the sum of the two numbers
 */
const addShort = (a, b) => a + b;