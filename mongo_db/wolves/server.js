const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Model
mongoose.connect('mongodb://localhost:27017/wolves', {useNewUrlParser: true});
let WolfSchema = new mongoose.Schema({
    name: {type: String},
    age: {type: Number, min:0, max:30},
// })
}, {timestamps: true})

// create an object to that contains methods for mongoose to interface with MongoDB
let Wolf = mongoose.model('Wolf', WolfSchema);

// middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/static"));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');



// routes
app.get('/', (req, res) => {
    Wolf.find()
    .then(function(data){
        res.render('index', {wolves: data})
    })
    .catch(function(err){
        console.log(err);
        res.render('index')
    })
});

// new
app.get('/wolves/new', (req, res) => {
    res.render('new')
})
// new post
app.post('/wolves/submit', (req, res) =>{
    console.log(req.body);
    Wolf.create(req.body);
    console.log("Murder Puppers Created")
    res.redirect('/')
})



app.listen(3030, () => console.log("listening on 3030"));