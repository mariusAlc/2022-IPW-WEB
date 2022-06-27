console.log("First example: \n");
for (let i = 0; i < 10; i ++) {
	console.log(i); // will print every number from 0 to 10 exclusive
}
console.log("\n");

console.log("Second example: \n");
// Simple number array
const numberArray = [4, 2, 9, 1, 4, 5, 13];
for (const i in numberArray) {
	console.log(i); // will print every index of numberArray
}
console.log("\n")
for (const i in numberArray) {
	console.log(numberArray[i]); // will print every number of numberArray
}
console.log("\n");

console.log("Third example: \n");
for (const number of numberArray) {
	console.log(number); // will print every number of numberArray
}
console.log("\n");

console.log("Fourth example: \n");
const stringArray = [
	"Asa ",
	"sunt ",
	"zilele ",
	"mele ",
	"una ",
	"buna ",
	"zece ",
	"rele!"
];
for (const str of stringArray) {
	console.log(str); // will print every string within stringArray
}
console.log("\n");

console.log("Fifth example:\n");
const emptyArray = [];
emptyArray.push("Daca "); // add an item to an array
console.log(emptyArray);
emptyArray.push("Tu ");
console.log(emptyArray);
emptyArray.pop(); // Remove the last element of the array
console.log(emptyArray);
emptyArray.push("nu ", "eu ", "atunci ", "cine?"); // push multiple items
console.log(emptyArray);
console.log("\n");

console.log("Sixth example:\n");
// Array functions
const arr = [2,6,1,3,9,12,5];
console.log(arr);
// Filter an array based on a given filter function
let filtered = arr.filter((value, index) => {
	if (value > 4) {
		console.log(index);
		return true;
	} else {
		return false;
	}
});
console.log(filtered);
console.log("\n");

console.log("Seventh example:\n");
// Sort an array based on a helper function
filtered = filtered.sort((a, b) => {
	return b - a;
});
console.log(filtered);
// Sort an array based on a helper function
filtered = filtered.map((value) => {
	return value * 3;
});
console.log(filtered);
console.log("\n");

console.log("Eight example:\n");
// Reduces an array to a single value
const value = filtered.reduce((a, b) => {
	return a + b;
});
console.log(value);
console.log("\n"); 
