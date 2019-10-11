let express     =require('exrpress'),
    parser      = require('body-parser'),
    path        = require('path');

PORT="3030"
// Instanciate app
let app = express()



// App.listen
app.listen(PORT, function(){
    console.log("Rippin it up on port: "+PORT)
})
