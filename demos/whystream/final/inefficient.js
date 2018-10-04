var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res) {
  fs.readFile('../../big.file', function (err, data) {
    res.end(data)
  })
})

server.listen(5000)
