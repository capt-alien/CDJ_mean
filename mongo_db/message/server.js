let express = require('express');
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let Schema = mongoose.Schema;
let PORT = "3030"


let app = express()

// pluggins
app.set('view engine', 'ejs');
app.set(path.join('views', './views'));


// middleware

// Routes
// index
app.get('/', (req, res)=>{
    res.send("Twearkin up a storm")
})

// end
app.listen(PORT, function(){
    console.log('Tearin it up on port 3030')
})
