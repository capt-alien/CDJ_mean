const express = require("express");
// const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();


mongoose.connect('mongodb://localhost3030/quotes', {useNewUrlParser: true});
const QuoteSchema = new mongoose.Schema({
                                         name: {type: String},
                                         quote: {type: String},
                                            }, {timestamps: true})

const Quote = mongoose.model('Quote', QuoteSchema);

// create an object to that contains methods for mongoose to interface with MongoDB

// middleware
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.set('views', __dirname + '/views');
// app.use(session({
//   secret: 'keyboardkitteh',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { maxAge: 60000 }
// }))


// routes
app.get('/', (req, res) => {
   res.render('index')
});

// submit route
app.post('/quoting', function(req, res){
    console.log(req.body);
    Quote.create(req.body)
    .than(function(data){
        console.log(data);
        res.redirect('/quotes')
    })
    .catch(function(){
        console.log(err);
        res.redirect('/')
    })
})


// quotes route
app.get('/quotes', function(req, res){
    Quote.find()
        .then(function(data){
            console.log(data);
            res.render('quotes', {quotes: data})
        })
        .catch(function(err){
            console.log(err);
            res.render('quotes');
        })
})


// Bottom
app.listen(3030, () => console.log("listening on 3030"));
