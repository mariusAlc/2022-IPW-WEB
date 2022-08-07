/**
 * Creati o functie care primeste ca input un numar si un string:
 * Functia va afisa in consola string-ul dupa ce un timp egal cu numarul primit ca parametru a trecut.
 * De asemenea, functia va afisa la un interval de 100 * (logaritm in baza numar din (12 + numar * 3)) milisecunde string-ul inversat.
 * Exemplu de input:
 * 3000, "Solo, percutia"
 */

/**
 * Document the timerInterval
 * @returns
 */
 function timerInterval () {
	// Get all arguments passed to a process 
	const arguments = process.argv.slice(2);
	console.log(`List of arguments:\n${arguments}`)
	return arguments;
}

timerInterval();