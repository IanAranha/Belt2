
//controllers/user.js

var mongoose = require('mongoose');
var User = mongoose.model('User');
var Product = mongoose.model('Product');
var session = require('express-session');


module.exports = {
    login: function(req, res){
        console.log('A4 Hitting login in /Controller/user')
        User.findOne({name:req.body.name}, function(err, user){
            if(err){
                console.log(err)
            }else{
                if(user == null){
                    User.create({name:req.body.name}, function(err, user){
                        if(err){
                            console.log(err)
                            console.log('Err in creating new user')
                        } else {
                            console.log('A4.5: successfully created a new user')
                            console.log(user)
                            req.session.user = user
                            res.json(req.session.user)
                        }
                    })
                } else {
                    console.log('A4.5b Found user. Set as session user')
                    req.session.user = user
                    res.json(req.session.user)
                    res.json();
                }
            }
        });

    },

    islogged: function(req, res){
        console.log('B4 Hittting islogged in user contoller')
        if(req.session.user){
            console.log('b4.5 USER FOUD')
            res.json({loggedin:true, user:req.session.user})
        } else{
            console.log('B4.5b: User not found')
            res.json({loggedin:false})
        }
    },

    logout: function(req, res){
        console.log('Z4 hitting logout contoller')
        req.session.destroy()
        res.json() //send back nothing  
    },

    goHome: function(req, res){
        console.log('E4 hitting goHome contoller')
        res.json() //send back nothing  
    },
    

    endBid: function(req, res){
        console.log('F4 hitting endBid contoller')
        res.json() //send back nothing  
    },

    
    readOne: function(req, res){
        console.log('D4 hitting readOne controller')
        User.find({ name: { $eq: req.session.user.name }}, (err, user)=>{
            if(err){
                console.log('D.4.a: Error in Query for one user')
            }else{
                console.log('D.4.b. Found one user')
                console.log(user);
                res.json(user)
            }
        })
    },

    readAll: function(req, res){
        console.log('C4 hitting readAll controller')
        Product.find({}, (err, products)=>{
            if(err){
                console.log('C.4.a: Error in Query for all products')
            }else{
                console.log('C.4.b. found all products')
                console.log(products);
                res.json(products)
            }
        })
    },
    upDate: function(req, res){},
    delete: function(req, res){},

    //Product Functions/////
    
    addtoList: function(req, res){
        console.log('Full Body ', req.body)
        Product.create({
            name:"Product"
            }, function(err, user){
            if(err){
                console.log(err)
                console.log('F.4a: Err in Adding to List')
            } else {
                console.log('F.4b: successfully created a new List Item')
            }
        })
    },

    showAll: function(req, res){
        console.log('C4 hitting showAll controller')
        Product.find({}, (err, products)=>{
            if(err){
                console.log('C.4.a: Error in Query for all products')
            }else{
                console.log('C.4.b. found all products')
                console.log(products);
                res.json(products)
            }
        })
    },








}
