var fs = require('fs')
var { createGzip } = require('zlib')

fs.createReadStream('../../testfile')
  .pipe(createGzip())
  .pipe(fs.createWriteStream('./testfile.gzip'))
