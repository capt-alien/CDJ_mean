const express = require("express");
const session = require('express-session');
const app = express();
const bodyParser = require('body-parser');

// Pluggins

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))

// Routes
app.get('/', (req, res) => {
   res.render('index');
   // res.send("Art avenger, let's start the adventure Hit ya with nerve gas, absurd blasts")
});

// Post to session
app.post('/submit', (req, res) =>{
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    console.log(req.session);
    res.redirect('/result');
});

// results(submit session data)
app.get('/result', (req, res) => {
    info = {
            'name': req.session.name,
            'location': req.session.location,
            'language': req.session.language,
            'comment': req.session.comment
            }
    console.log(info);
    res.render('result', info);
})


app.listen(3030, () => console.log("Deltron rippin' it on port 3030"));
