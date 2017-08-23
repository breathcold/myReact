const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const extractTextPlugin  =  require('extract-text-webpack-plugin');


module.exports = {
    entry:{
        "index":"./src/js/index",
        "main":"./src/js/main"
    },
    output:{
        filename:"js/[name].js",
        path: path.resolve(__dirname,'dist')
    },
    module:{
        rules :[
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name:'common', // 注意不要.js后缀
            chunks:['index','main']
        }),
        new HtmlWebpackPlugin({
            title:"React",
            chunks:['index','common'],
            filename:"index.html",
            template:"./src/templ/index.html"
        })
    ],
    externals:{
        'react':'React',
        'react-dom':'ReactDOM'
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    }
}
