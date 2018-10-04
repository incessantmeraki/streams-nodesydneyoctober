var net = require('net')

var proxy = net.createServer((stream) => {
  stream
  .pipe(net.connect(5000, 'localhost'))
  .pipe(stream)
})

proxy.listen(5500)
