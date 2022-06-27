/**
 * node index.js firstArg secondArg thirdArg
 * @returns list of arguments
 */
function main () {
	// Get all arguments passed to a process
	const arguments = process.argv.slice(2);
	console.log(`List of arguments:\n${arguments}`)
	return arguments;
}

main();