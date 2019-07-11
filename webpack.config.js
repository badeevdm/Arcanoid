const path = require('path')

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build/'
    },
    module: {
        rules : [
            {
                test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", options: { presets: ['@babel/preset-env'] }
            }
        ]
    }
}