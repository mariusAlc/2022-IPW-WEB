/**
 * Creati o functie care primeste ca input 4 parametrii:
 * 	str -> o propozitie in care cuvintele sunt separate prin diferite caractere
 * 	sep -> un caracter de separare
 * 	number -> un numar
 * 	secondSep -> al doilea caracter de separare
 * Functia va separa propozitia "str" in cuvinte pe baza separatorului "sep".
 * Dupa care va concatena pentru fiecare cuvant in parte, cuvantul de "number" ori.
 * Dupa ce concatenarea pentru fiecare cuvant este finalizata, functia va concatena cuvintele multiplicate folosind ca separator "secondSep"
 * Exemplu de input: `concater("AM|SA|BAG|DOUA|ZIARE", "|", 3, "~")`
 * Exmplu de output: "AMAMAM~SASASA~BAGBAGBAG~DOUADOUADOUA~ZIAREZIAREZIARE"
 */

/**
 * Document the concater
 * @returns
 */
 function concater () {
	// Get all arguments passed to a process
	const arguments = process.argv.slice(2);
	console.log(`List of arguments:\n${arguments}`)
	return arguments;
}

concater();