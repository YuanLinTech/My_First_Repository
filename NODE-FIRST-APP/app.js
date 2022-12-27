const http = require('http'); // Importing a global module named HTTP

/* The first argument of request listener contains data about the request and the second one will help you send a response. 
Node will execute the function whenever a request reaches our server. */
http.createServer((req, res) => {
    console.log(res);
}); 

/*

http.createServer((req, res)=>{

}); 

is equivalent to 
http.createServer(function(req,res){

}); */
