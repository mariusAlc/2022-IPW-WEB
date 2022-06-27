
// Comments and variable assignation
/**
 * Single line comments are written with - //
 * Multi line comments are written with - /** 
 */
const str = "A string"; // string
const bool = false; // boolean
const nr = 23; // number
const nrNonassignable = 23; // cannot be reassigned

let nrAsignable = 23; // can be reassigned
nrAsignable = 24; // assign another value

var nrDeclarable = 23; // can be redeclared
var nrDeclarable = 24; // redeclare

/**
 * NEVER use var, always use const or let.
 * var - can be accesssed before it was declared, available everywhere globally or locally regardless of block scope
 * let - cannot be accessed before it was declared, available only in block scope
 * const - same as let, but cannot be reassigned
 */