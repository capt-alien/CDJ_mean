const express = require("express");
const session = require('express-session');
const app = express();

// Pluggins

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// Routes
app.get('/', (req, res) => {
    if( req.session.counter){
        req.session.counter += 1
    }
    else{
        req.session.counter = 1
    }
    obj = {'counter': req.session.counter}
    console.log(req.session)
   res.render('index', obj);
   // res.send("Sub bub!")
});

app.get('/two', (req, res) => {
    req.session.counter += 1;
    res.redirect('/');
});

//clear
app.get('/clear', (req, res) => {
    req.session.counter = 0;
    res.redirect('/');
});



app.listen(6960, () => console.log("listening on port 6960"));
