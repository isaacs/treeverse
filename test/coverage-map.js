const { basename } = require('path')
module.exports = test => ['index.js', 'lib/' + basename(test)]
