var fs = require('fs')
var path = require('path')
var compile = require('micro-css')
var result = ''
var additional = ''

additional += fs.readFileSync(require.resolve('patchbay/style.css'), 'utf8')

fs.readdirSync(__dirname).forEach(function (file) {
  if (/\.mcss$/i.test(file)) {
    result += fs.readFileSync(path.resolve(__dirname, file), 'utf8') + '\n'
  }

  if (/\.css$/i.test(file)) {
    console.log(file)
    additional += fs.readFileSync(path.resolve(__dirname, file), 'utf8') + '\n'
  }
})

module.exports = compile(result) + additional
