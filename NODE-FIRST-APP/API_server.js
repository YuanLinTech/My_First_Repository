const http = require('http'); // Importing a global module named HTTP
const fs = require('fs'); // "fs" stands for "file systems"
const path = require('path');

const homePage = fs.readFileSync(path.join(__dirname, 'home.html'));// Find home.html in the current directory

const server = http.createServer((req,res) => {
        if (req.url === '/about'){
            res.write('About me');
            res.end();
            return;
        }
        else if (req.url === '/home'){
            res.write('HomePage');
            res.end();
            return;
        }
        else{
            res.write('Hello');
            res.end();
        }
    }
)

server.listen(3000);
// API server: Accept front end request for data, then retrieve data from the back end, then send the data to the front end as the response.