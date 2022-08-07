// Resolve a promise
const resovlePromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve("Promise Resolved");
	}, 1000);
});
resovlePromise.then((res) => {
	console.log(res);
}).catch((err) => {
	console.log("Promise Rejected");
});

// Reject a promise
const rejectPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		reject("Can't resolve");
	}, 2000);
});
rejectPromise.then((res) => {
	console.log(res);
}).catch((err) => {
	console.log(err);
});

async function asyncFunction() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("Promise async await resolved");
		}, 1000);
	});;
}

// async await logic
// Functions that execute asynchronous code need the async keyword preceding them
async function main () {
	// Promises can be also executed using async await keyword
	// It makes the whole processes easier to read and understand
	// Calls to async functions need to be made using the await keyword
	try {
		const result = await asyncFunction();
		console.log(result);
	} catch (error) {
		console.error(error);
	}
}

main();