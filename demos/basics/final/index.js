var fs = require('fs')

var rStream = fs.createReadStream('../../testfile')
var wStream = fs.createWriteStream('./outputFile')


rStream.on('readable', function() {
  var chunk = rStream.read()
  if (chunk) {
    console.log(chunk.toString())
    wStream.write(chunk)
  }
})


// rStream
//   .pipe(process.stdout)

rStream.on('end', function() {
  console.log('Finished reading data')
  wStream.end()
})
