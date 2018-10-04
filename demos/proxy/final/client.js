var net = require('net')

var stream = net.connect(5500, 'localhost')

stream  
  .pipe(process.stdout)

