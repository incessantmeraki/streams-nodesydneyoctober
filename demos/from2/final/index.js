var from = require('from2')

var collection = ['first','second', 'third']

var rStream = from(function(size, next) {
  if (collection.length > 0)
    next(null, collection.pop())
  next(null,null)
})

rStream
  .pipe(process.stdout)





