const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    cfmsid : {
        type: String,
        required: true
    },
    mandalcode : {
        type: String,
        required: true
    }, 
    firstname :{
        type: String,
        required: true
    },
    lastname :{
        type: String,
        required: true
    },
    email :{
        type: String,
        required: true,
        unique: true
    },
    password :{
        type: String,
        required: true
    },
    role : {
        type: String,
        requried: true
    },
    date : {
        type: Date,
        default: Date.now
    }
    
})

module.exports = mongoose.model('User', userSchema)