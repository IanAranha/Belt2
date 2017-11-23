//models/user.js

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var UserSchema = new Schema({
    name: String,
    bid:Number,
    _product:[{type:Schema.Types.ObjectId, ref:'Product'}],
})


mongoose.model('User', UserSchema)
