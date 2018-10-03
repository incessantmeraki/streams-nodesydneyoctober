var fs = require('fs')
var http = require('http')

var server = http.createServer((req,res) => {
  fs.createReadStream('large').pipe(res)
})


server.listen(3001)
