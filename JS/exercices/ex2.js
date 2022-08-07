/**
 * Creati o functie care primeste ca input un obiect de forma:
 * {
 * 		id: string,
 * 		firstName: string,
 * 		lastName: string,
 * 		address: string,
 * 		age: string,
 * 		email: string,
 * }
 * Functia va adauga in obiectul respectiv o alta functie, presentation care va intoarce un string.
 * Stringul intors trebuie sa contina propietatile firstName, lastName, address.
 * Rezultatul intors este obiectul cu functia aferenta adugata dar si rezultatul functiei presentation.
 * Exemplu de input:
 * {
 * 		id: 21,
 * 		firstName: "Dani",
 * 		lastName: "Mocanu",
 * 		address: "Unde nu stiu dusmanii",
 * 		age: "Nemuritor",
 * 		email: "tank@masina.busit",
 * }
 * Exmplu de output:
 * {
 * 		id: 21,
 * 		firstName: "Dani",
 * 		lastName: "Mocanu",
 * 		address: "Unde nu stiu dusmanii",
 * 		age: "Nemuritor",
 * 		email: "tank@masina.busit",
 * 		presentation: function()
 * },
 * "Eu sunt bossul Dani Mocanu, locuiesc Unde nu stiu dusmanii, sunt Nemuritor"
 */

/**
 * Document the injecter
 * @returns
 */
 function injecter () {
	// Get all arguments passed to a process 
	const arguments = process.argv.slice(2);
	console.log(`List of arguments:\n${arguments}`)
	return arguments;
}

injecter();