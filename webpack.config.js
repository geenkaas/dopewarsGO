var path = require('path');

module.exports = {
    entry: './assets/js/init.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
    }
}