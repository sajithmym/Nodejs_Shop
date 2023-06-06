const Pkg = require("express")
const Get = require("./Route/get")
const Post = require("./Route/post")
const BP = require("body-parser")

const Dude = Pkg()
Dude.use(Pkg.static('css'))
Dude.use(BP.urlencoded({extended : false}))

Dude.set('view engine','ejs')
Dude.set('views','Page')

Dude.use(Get.r)
Dude.use(Post.r)


Dude.listen(4044,() => console.log("Click http://127.0.0.1:4044"))