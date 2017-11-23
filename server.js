

var express = require ('express')
var app = express()
var path = require('path')
var bp = require('body-parser')
var session = require('express-session')
var fs = require('fs')
var port = 8000


app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bp.json())
app.use(session({secret: 'Ericisadawg'}))


require('./config/mongoose');
require('./config/routes')(app);


app.listen(port, function(){
    console.log('Listening at port ' + port)
})