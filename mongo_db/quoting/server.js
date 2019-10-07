const express = require("express");
const app = express();


// middleware



// routes
app.get('/', (request, response) => {
   response.send("Hello Express");
});








// Bottom
app.listen(3030, () => console.log("listening on 3030"));
