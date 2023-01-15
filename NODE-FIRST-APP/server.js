const http = require('http'); // Importing a global module named HTTP
const fs = require('fs'); // "fs" stands for "file systems"
const path = require('path');
const homePage = fs.readFileSync(path.join(__dirname, 'home.html')); // Find home.html in the current directory

/* The first argument of request listener contains data about the request and the second one will help you send a response. 
Node will execute the function whenever a request reaches our server. */
const server = http.createServer((req, res) => {
    if (req.url === '/about'){
        res.write('About me'); // Display "about me" on the page with the URL "localhost:3000/about"
        res.end();
        return;
    }
    else if (req.url === '/home')
    {
        res.write(homePage); // Display homePage on the page with the URL "localhost:3000/home"
        res.end();
        return;
    }
    else
    {
        res.write('Hello'); // Display "Hello" on any other page, including "localhost:3000"
        res.end();
    }
    
    /* console.log(req.url, req.method, req.headers); // Print server request
    console.log(res); // Print server response
    process.exit(); // Stop listening, unregister the server and quit the process*/
}); 


/* The listen() method actually starts a process where node.js will not immediately exit our script,
 but instead keep the script running to listen to a port, that's why the method is named like this for incoming requests.*/

server.listen(3000); // Let the server listen to port 3000
/* API server: Firstly, Accept front end request for data. 
Secondly, retrieve data from the back end. Finally send the data to the front end as the response.*/