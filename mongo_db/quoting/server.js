const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/quotes', {useNewUrlParser: true});
let QuoteSchema = new mongoose.Schema({
    name: {type: String},
    quote: {type: String}
// })
}, {timestamps: true})

// create an object to that contains methods for mongoose to interface with MongoDB
let Quote = mongoose.model('Quote', QuoteSchema);


// middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



// routes
app.get('/', (req, res) => {
    res.render('index')
});

// submit route
app.post('/submit', function(req, res){
    console.log(req.body);
    Quote.create(req.body)
    .then(function(data){
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
        // console.log(data);
        res.render('quotes', {quotes: data})
    })
    .catch(function(err){
        console.log(err);
        res.render('quotes');
    })
})


// Bottom
app.listen(3030, () => console.log("listening on 3030"));
