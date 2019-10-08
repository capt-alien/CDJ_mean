const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Model
mongoose.connect('mongodb://localhost:27017/wolves', { useUnifiedTopology: true, useNewUrlParser: true});

let WolfSchema = new mongoose.Schema({
        name: {type: String},
        age: {type: Number, min:0, max:30},    // })
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
            .then(function(allWolves){
                res.render('index', {wolves: allWolves})
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
        Wolf.create(req.body)
            .then(function(newWolf){
                console.log("Puppers Created")
                res.redirect('/')
            })
            .catch(function(err){
                console.log("Puppers failed to create")
                res.redirect('/')
            })
    })

    // SHOW
    app.get('/wolves/:id', (req, res) => {
        Wolf.findOne({_id:req.params.id})
        .then( function(data){
            res.render('wolf', {wolf: data})
        })
        .catch(function(err){
            console.log(err);
            res.redirect('/')
        })
    })

    // EDIT
    app.get('/wolves/edit/:id', (req, res)=>{
        Wolf.findOne({_id:req.params.id})
        .then( function(data){
            res.render('edit', {wolf: data})
        })
        .catch(function(err){
            console.log(err);
            res.redirect('/wolves/:id')
        })
    })

    // ???Put method????
    app.post('/wolves/edit/:id/submit', (req, res)=>{
        Wolf.updateOne({_id:req.params.id},{
            name:req.body.name,
            age: req.body.age
        })
        .then(function(data){
            console.log('edited a wolf', data);
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err);
            res.redirect('/')
        })
    }  )


    // delete
    app.post('/wolves/delete/:id', (req, res)=>{
        Wolf.remove({_id:req.params.id})
        .then(function(){
            console.log("wolf object euthanized")
            res.redirect('/')
        })
        .catch(function(err){
            console.log(err);
            res.redirect('/')

        })

    })


    app.listen(3030, () => console.log("listening on 3030"));
