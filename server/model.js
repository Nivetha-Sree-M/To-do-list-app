const mongoose = require('mongoose')

const schema = mongoose.Schema({
    username:String,
    email:String,
    password:String
})

const User = mongoose.model('user',schema)
module.exports = User;
