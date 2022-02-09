const mongoose = require('mongoose')


// Creating a Schema for various posts 
const postSchema = mongoose.Schema({
    title : String,
    message : String,
    creator : String,
    tags : [String],
    selectedFiles : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    }

})

// Model

const PostMessage = mongoose.model('PostMessage',postSchema)

module.exports = PostMessage