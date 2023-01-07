const http = require('http'); // Importing a global module named HTTP

/* The first argument of request listener contains data about the request and the second one will help you send a response. 
Node will execute the function whenever a request reaches our server. */
const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers); // Print server request
    // console.log(res); // Print server response
    process.exit(); // Stop listening, unregister the server and quit the process
}); 

/*

http.createServer((req, res)=>{

}); 

is equivalent to 
http.createServer(function(req,res){

}); */

/* The listen() method actually starts a process where node.js will not immediately exit our script,
 but where node.js will instead keep this running to listen, that's why the method is named like this for incoming requests.*/

server.listen(3000); // 3000 is the port number