const http = require("http");
const server = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'text/html'); // Setting a single header value for implicit headers. Returns the response object.
    res.writeHead(200, {"Content-Type":"text/plain"}); // Sending a response header to the request. Response code 200 indicates the request succeeded.
    res.write("This is a really cool message.");// To send a response message back to the client making the request
    res.end();// Signalling to the server that all response headers and body have been sent
});
server.listen(3000, "localhost"); // (port number, host name)