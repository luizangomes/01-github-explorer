const path = require('path')        //aqui ele vai tornar os caminhos adaptáveis para diferentes SOs

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.jsx'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx$/,             //o $ indica o fim de um arquivo
                exclude: /node_modules/,
                use: 'babel-loader',
            }
        ],
    }
};