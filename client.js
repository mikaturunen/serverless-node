const net = require("net");

const client = net.connect({
		localhost: "localhost",
		port: 8000
	},
	() => {
		// 'connect' listener
		console.log("Connected to server!");
		client.write("Hi, Server!");
	});

client.on("data", data => {
	console.log(data.toString());
});

client.on("end", _ => {
	console.log("Server disconnected.");
});

process.on("SIGTERM", _ => {
	client.write("Client terminated. Disconnecting..");
  	client.end();
});
