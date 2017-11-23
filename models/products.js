//models/bucket.js
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema({
    id:Number,
    name:String,
})


mongoose.model('Product', ProductSchema)
