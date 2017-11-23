var path = require('path')
var users = require('./../controllers/user')

module.exports = function(app){
    //Index component routes///
    app.post('/login', (req, res)=>{
        console.log('A3 routes/login')
        users.login(req, res)

    }),

    app.get('/logout', (req, res)=>{
        console.log('Z.3 routes/logout')
        users.logout(req, res)

    }),

    app.get('/getAllproducts', (req, res)=>{
        console.log('C3: routes/getAllproducts')
        users.readAll(req, res)
    }),

    app.get('/showAllproducts', (req, res)=>{
        console.log('C3: routes/showAllproducts')
        users.showAll(req, res)
    }),

    app.get('/getOneuser', (req, res)=>{
        console.log('D3: routes/getOneuser')
        users.readOne(req, res)
    }),

    app.get('/addtoList', (req, res)=>{
        console.log('E3: routes/addtoList')
        users.addtoList(req, res)
    }),

    app.get('/endBid', (req, res)=>{
        console.log('F3: routes/endBid')
        users.endBid(req, res)
    }),

    //GENERAL ROUTES GO HERE
    app.get('/islogged', (req, res)=>{
        console.log('B3: routes/islogged')
        users.islogged(req, res)
    }),
    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'))
        console.log('Hitting WildCard')
    })
}