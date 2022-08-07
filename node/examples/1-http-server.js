let http = require("http");
http.createServer((request, response) => {
	let body = [];
	request.on("data", (chunk) => {
		body.push(chunk); // when you get data, push it in the res body
	}).on("end", () => {
		body = Buffer.concat(body).toString(); // tranform to string buffer
		console.log(body);
		response.end(body);
	});
}).listen(8080);