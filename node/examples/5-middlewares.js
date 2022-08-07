// To install a package we need the npm utilitary.
// To install express simply write npm install express in the command line
const express = require("express");

const app = express();
app.use((req, res, next) => {
	const { auth } = req.headers.authorization;
	const token = auth.split(" ")[1];
	if (token) {
		next();
	} else {
		res.sendStatus(401);
	}
});
/**
 * req - request object
 * res - response object
 * in req you have access to specific parameters of the incoming request
 * in res you have access to specific parameters for responding to the request
 */
app.get("/simple/get/route", (req, res) => {
	try {
		// This represents a get resource
		res.status(200).send({
			msg: "A simple message"
		})
	} catch (error) {
		console.error(error);
	}
});
app.post("/simple/post/route", (req, res) => {
	try {
		// This represents a post resource
		const data = req.body;
		res.status(200).send({
			msg: data
		})
	} catch (error) {
		console.error(error);
	}
});