const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response)=> {
    console.log(request.url)
    if(request.url === '/') {
        fs.readFile('views/index.html', 'utf8', (errors, contents) =>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    } //end of first if statement
    // Cars
    else if(request.url === "/cars"){
        fs.readFile('views/cars.html', 'utf8', (errors, contents)=>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    // cats
    else if(request.url === "/cats"){
        fs.readFile('views/cats.html', 'utf8', (errors, contents)=>{
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        })
    }
    // Styles
    else if(request.url === '/stylesheets/styles.css'){
      fs.readFile('./stylesheets/styles.css', 'utf8', function(errors, contents){
       response.writeHead(200, {'Content-type': 'text/css'});
       response.write(contents);
       response.end();
      })
    }
    // Images
    //
    // CAR
    else if(request.url === '/images/car/toy.jpg'){
  // notice we won't include the utf8 encoding
  fs.readFile('./images/car/toy.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
  })
}
    // CAT
    else if(request.url === '/images/cat/cat1.jpg'){
  // notice we won't include the utf8 encoding
  fs.readFile('./images/cat/cat1.jpg', function(errors, contents){
      response.writeHead(200, {'Content-type': 'image/jpg'});
      response.write(contents);
      response.end();
  })
}



// end of server
else {
    response.end('404: No Soupe for You!!')
}
})





// Bottomware
server.listen(7077);
console.log("Server running on PORT 7077")
