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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));


mongoose.connect('mongodb://localhost:27017/passive_agro_two', { useUnifiedTopology: true, useNewUrlParser: true});

// Model Schema
let messageSchema = new Schema({
    name: String,
    message: String,
    _comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
})

let commentSchema = new Schema({
    name: String,
    comment: String,
    _message: {type: Schema.Types.ObjectId, ref: 'Message' }
})

let Message = mongoose.model('Message', messageSchema)
let Comment = mongoose.model('Comment', commentSchema)


// middleware

// Routes
// index
app.get('/', (req, res)=>{
    Message.find().populate('_comments').exec()
    .then((data)=>{
        // console.log(data);
        res.render('index', {messages: data});
    })
    .catch((err)=>{
        console.log(err);
        res.render('index', {messages:err});
    })
})


// Post message Routes
app.post('/message', (req,res)=>{
    console.log(req.body);
    Message.create(req.body)
    .then((message)=>{
        console.log("Made it!", message);
        res.redirect('/');
    })
    .catch((err)=>{
        console.log("Way to go!", err);
        res.redirect('/');
    })
})

// post comment route
app.post('/comment/:id', (req, res)=>{
    Message.findOne({_id: req.params.id})
    .then((message)=>{
        let newComment = new Comment(req.body);
        newComment._message = message._id;
        message._comments.push(newComment);
        console.log(newComment+" Created!!!!!")
        message.save()
            .then((data)=>{
                newComment.save()
                    .then((data)=>{
                        res.redirect('/')
                    })
                    .catch((err)=>{
                        console.log(err);
                        res.redirect('/');
                    })
                })
            .catch((err)=>{
                console.log(err);
                res.redirect('/');
            })
    })
    .catch((err)=>{
        console.log(err);
        res.redirect('/');
    })
})

// end
app.listen(PORT, function(){
    console.log('Tearin it up on port: '+PORT)
})
