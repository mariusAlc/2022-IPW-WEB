export const verifyEnv = (prop: string) => {
	if (process.env[prop] === undefined) {
		return false;
	} else {
		return true;
	}
}