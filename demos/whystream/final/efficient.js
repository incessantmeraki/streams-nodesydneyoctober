var http = require('http')
var fs = require('fs')

var server = http.createServer(function(req,res) {
  fs.createReadStream('../../big.file')
    .pipe(res)
})

server.listen(5000)
