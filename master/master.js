"use strict";

const net = require("net");
const express = require("express");
const path = require("path");

const pathApiVersion1 = "/api/v1/";
const restApiVersion1 = require(path.join(__dirname, pathApiVersion1));

const rest = express();
rest.disable("x-powered-by");

console.log("REST API listing:")
restApiVersion1.rest.forEach(restApiRoutes => {
	restApiRoutes.apis.forEach(api => {
		if (!api.type || !api.path || !api.callback) {
			return;
		}

		if (api.path[0] === "/") {
			api.path = api.path.substring(1);
		}

		let apiPath = pathApiVersion1 + api.path;
		console.log(` - ${api.type}:${apiPath}`);
		rest[api.type](apiPath, api.callback);
	});
});
rest.get("*", (request, response) => response.status(200).json({ info: "Nerverless master API" }));

rest.listen(8001, _ => {
	console.log("Rest API working.");
})

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
