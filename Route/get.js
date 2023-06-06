const exp = require("express")
const All = require("./post")

const Dude_route = exp.Router()

Dude_route.get("/",(req,res,n) => {
    res.render("Home",{title : "Home page",mym : All.all})
})

module.exports.r = Dude_route