exports.apis = [
	{
		type: "get",
		path: "/",
		callback: (request, response) => response.json({ message: "OK" })
	}
]
