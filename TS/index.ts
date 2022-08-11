import express from "express";
import dotenv from "dotenv";
import path from "path";
dotenv.config({
	path: path.join(".", ".env")
});
import { verifyEnv } from "./util";
import router from "./routes/basicRoutes";

async function main() {
	const envVars = [
		"PORT"
	];
	for (const prop of envVars) {
		if (verifyEnv(prop)) {
			throw new Error(`Variable ${prop} is not present in environment!`)
		}
	}
	const app = express();
	
	app.use(router);
	app.listen(process.env.PORT);
}

main();