var fs = require('fs')
var http = require('http')

var server = http.createServer((req,res) => {
  var file = fs.readFile('large', (err,data) => {
    res.end(data)
  })
})


server.listen(3001)
