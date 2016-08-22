
const package = require("../package.json");
const cli = require("commander");

const debugPringInput = (input) => {
	console.log("input variables:");
	console.log(" -i:", input.integer);
	console.log(" -m:", input.master);
};

// Setup the application
cli
	.version(package.version)
	.option("-i, --integer <n>", "Test", parseInt)
	.option("-m, --master <ip>", "Deploy master to given IP.")
	.parse(process.argv);

if (process.env.DEBUG) {
	debugPringInput(cli);
}

if (process.argv.slice(2).length <= 0) {
	cli.help();
}

if (cli.master) {
	
}
