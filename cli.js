
const package = require("./package.json");
const cli = require("commander");

const debugPringInput = (input) => {
	console.log("input variables:");
	console.log(" -g:", input.integer);
};

// Setup the application
cli
	.version(package.version)
	.option("-i, --integer <n>", "Test", parseInt)
	.parse(process.argv);


if (process.argv.slice(2).length <= 0) {
	cli.help();
}

if (process.env.DEBUG) {
	debugPringInput(cli);
}
