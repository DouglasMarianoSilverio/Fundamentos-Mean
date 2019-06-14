const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
const allowCors = require('./cors')
//funcionando sem! :D 
//const queryParser= require('express-query-int')


server.use(bodyParser.urlencoded({extended:true}))
server.use(bodyParser.json())
server.use(allowCors)
//funcionando sem! :D 
//server.use(queryParser)

server.listen(port,()=>{
    console.log(`BACKEND is running on port ${port}.`)
})

//exportar o servidor para ser usado como parametro na chamada do routes.js dentro de loader.js
module.exports = server