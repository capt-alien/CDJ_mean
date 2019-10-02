const http = require('http');
const fs = require('fs');
const server = http.createServer((request, response) => {
    // index
    if(request.url === '/') {
        fs.readFile('index.html', 'utf8', (errors, contents) => {
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    // ninja
    else if (request.url === "/ninjas") {
         fs.readFile('ninjas.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    // dojo
    else if (request.url === "/dojo/new") {
         fs.readFile('dojo.html', 'utf8', (errors, contents) => {
             response.writeHead(200, {'Content-type': 'text/html'});
             response.write(contents);
             response.end();
         });
    }
    // else
    else {
        response.end('404: Requests not available');
    }
});
server.listen(6789);
console.log("listening on port 6789");
