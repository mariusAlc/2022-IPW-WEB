/**
 * Create a calculator command line application that receives two numbers and an operator as input and outputs the answer of the equation regarding the selected operator.
 * The operators can be: “+”, “-”, “*”, ”/”.
 * The program must display the resulting value 
 * The program must handle edge error cases (Division by 0)
 * Example Input: ./calculator.js 2 4 +
 * Example Output: “The answer is 6”
 */
 const operators = {
	"PLUS": "+",
	"MINUS": "-",
	"DIVISION": "/",
	"MULTIPLICATION": "*"
};

/**
 * Calculator application
 * @argument number1
 * @argument number2
 * @argument operator
 * @returns list of arguments
 */
 function calculator () {
	// Get all arguments passed to a process
	const arguments = process.argv.slice(2);
	console.log(`Inputs: \n${arguments}`)
	return arguments;
}

calculator();