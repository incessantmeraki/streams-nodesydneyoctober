var net = require('net')

var server = net.createServer((stream) => {
  stream.pipe(stream)
})

server.listen(5000)
