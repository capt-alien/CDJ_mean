const Message = require('../models/models.js');
const Comment = require('../models/models.js');


module.exports = (app) => {
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


// END REQUIRE function
}
