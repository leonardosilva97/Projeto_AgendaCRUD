const res = require("express/lib/response")

class indexController {
    static index(req,res){
        res.render('index')
    }
}

module.exports = indexController