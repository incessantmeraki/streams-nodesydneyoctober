var net = require('net')
var fs = require('fs')

var server = net.createServer ((stream) => {
    fs.createReadStream(__filename)
    .pipe(stream)
})

server.listen(5000)
