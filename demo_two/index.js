var fs = require('fs')

var readableStream = fs.createReadStream('file')

readableStream.on('readable', function() {
  console.log('data available')
  let data = readableStream.read()
  if (data) 
    console.log(data.toString(), data.length)
})

readableStream.on('end', function() {
  console.log('no more data')
})
