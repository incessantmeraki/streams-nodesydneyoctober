var split = require('split2')
var fs = require('fs')
var to = require('to2')
var lineCount = 0

fs.createReadStream('./testfile')
  .pipe(split(':'))
  .pipe(process.stdout)
  
