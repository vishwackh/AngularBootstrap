var http = require("http");
var fs = require("fs");

var server = http.createServer(function(req,res){
	var url = req.url;
	var filePath = url.substring(1);
	loadFile(filePath,res);		
});

var loadFile = function(filePath,response){
	fs.readFile(filePath,function(e,data){
		if(e)
			response.end("Error. File not found " + filePath);
		else
			response.end(data);
	});
};
server.listen(8080);
console.log("Server started and running in 8080 ... ... ...");