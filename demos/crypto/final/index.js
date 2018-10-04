var { createHash } = require('crypto')


process.stdin
  .pipe(createHash('sha512', {encoding: 'hex'}))
  .pipe(process.stdout)
