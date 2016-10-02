// const { a, ...rest } = { a: 1, b: 2, c: 3 }
require('babel-core/register')({
  plugins: [
    ...require('../').plugins,
  ],
})
require('./test')
