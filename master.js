
const net = require("net");

const server = net.createServer(socket => {
	console.log("Client connected:", socket.remoteAddress);

	socket.on("end", _ => console.log("Client disconnected:", socket.remoteAddress));
	socket.on("data", data => console.log("R:", data.toString()));

	socket.write("Hello, World!");
})
.on("error", error => {
	console.log("Error", error);
	throw error;
});

server.listen({
		host: "localhost",
		port: "8000",
		exclusive: true,
	},
	socket => {
		console.log("Server listening on:", server.address());
	});
