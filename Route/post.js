const exp = require("express")

const Dude_route = exp.Router()

const Users = []

Dude_route.get("/a",(req,res,n) => {
    res.render("add",{ title : "Adding Page"})
})

Dude_route.post("/goto",(r,res,n) => {
    Users.push({name : r.body.sj})
    res.redirect('/')
})

Dude_route.use('/',(req,res,n) => {
    res.render('ms')
})

module.exports.r = Dude_route
module.exports.all = Users