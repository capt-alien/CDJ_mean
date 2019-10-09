let express = require('express');
let path = require('path');
// let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let PORT = "3030"
let app = express()

// pluggins
app.set('view engine', 'ejs');
app.set(path.join('views', './views'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));


// routes
require('./server/config/routes.js')(app);

// end
app.listen(PORT, function(){
    console.log('Tearin it up on port: '+PORT)
})
