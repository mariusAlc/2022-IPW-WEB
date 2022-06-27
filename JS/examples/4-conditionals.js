// Simple if
let condition = true;
if (condition) {
	console.log("Condition is met");
}
// If else syntax
let i = Math.floor(Math.random() * 11);
console.log(i);
if (i < 5) {
	console.log("IfElse - i is less than 5");
} else {
	console.log("IfElse - i is greated than 5");
}
// If else if syntax
if (i < 5) {
	console.log("IfElseIf - i is less than 5");
} else if (i > 5) {
	console.log("IfElseIf - i is greated than 5");
} else {
	console.log("IfElseIf - i is 5");
}
/**
 * Elvis operator -> ?: (Looks like elvis)
 * Shorthand inline if else expression
 */

const statement = i < 5 ? console.log("Elvis - i is less than 5") : console.log("Elvis - i is greater than 5");

// Switch case

switch(i) {
	case 1:
		console.log("Number is 1");
		break;
	case 2:
		console.log("Number is 2");
		break;
	case 3:
		console.log("Number is 3");
		break;
	case 4:
		console.log("Number is 4");
		break;
	case 5:
		console.log("Number is 5");
		break;
	case 6:
		console.log("Number is 6");
		break;
	case 7:
		console.log("Number is 7");
		break;
	case 8:
		console.log("Number is 8");
		break;
	case 9:
		console.log("Number is 9");
		break;
	case 10:
		console.log("Number is 10");
		break;
	default:
		console.log("Unkown number");
}