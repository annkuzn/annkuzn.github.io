const http = require("http");
 
const server = http.createServer(function(_request, response){
	const responseData = {
		message: "Ок"
	}

	response.setHeader("Access-Control-Allow-Origin", "*");
	response.setHeader("Access-Control-Allow-Headers", "*");
    response.end(JSON.stringify(responseData));
});

server.listen(3000);