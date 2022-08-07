// import fs module to be able to write and read from the disk
// this module is only available server-side
// most of the operations are either sync or async
const fs = require("fs");
// import path module to be able to work with filesystem paths
// linux and windows both have different path systems
// linux uses / as separator
// windows uses \
// it's a bad practice to concatenate strings to form a path, better use the path module
const path = require("path");

// Data to be written
const data = {
	basic: "JSON",
	data: "To",
	be: "written"
};
// convert the data to a string
const stringData = JSON.stringify(data);

// create the file path ("./" means the current directory)
const filePath = path.join("./", "test.json");

// write the data to a file
fs.writeFileSync(filePath, stringData);

// read the data from a file as a buffer
const bufferedData = fs.readFileSync(filePath);

// convert the buffer to a string and then convert it to a json object
const newData = JSON.parse(bufferedData.toString());

console.log(newData);