let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// const model
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


// end
module.exports = mongoose.model('Message', messageSchema)
module.exports = mongoose.model('Comment', commentSchema)
