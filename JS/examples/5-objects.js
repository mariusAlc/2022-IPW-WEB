// Objects
const student = {
	// Object properties
	firstName: "Florin",
	lastName: "Salam",
	age: 42,
	height: 1.75,
	// Function within an object
	fullName: function () {
		return `${this.firstName} ${this.lastName}`;
	}
}
// Calling object properties
console.log(student.fullName());
console.log(student.age);
// Incrementing object property
student.age = student.age + 1;
student["age"]++;
// Replacing property
student.fullName = function () {
	return `${this.firstName} ${this.lastName} Regele Manelelor`;
};
// Adding properties to object
console.log(student.fullName());
student.occupation = "Manele Singer";
console.log(student.occupation);
// View the object
console.log(student);

// Iterate object's properties
for (const value in student) {
	console.log(value);
}
// Define a new function for an object
student.toString = function(){
	return `${this.firstName} ${this.lastName} este Regele Manelelor, are ${student.height} m inaltime si ${student.age} ani.`;
};
console.log(student.toString());