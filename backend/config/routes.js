const express = require('express')

module.exports = function (server) {
    //api routes: []    
    const router = express.Router()
    server.use('/api',router)

    router.route('/teste').get(function(req,res,next){
        res.send('funcionou')
    })
}