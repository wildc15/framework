const path= require('path');
const webpack = require('webpack');
const htmlWebpackPlugin=require('html-webpack-plugin');

module.exports={
    mode:'development',
    entry:'./framework/index.js',
    output:{
        path:path.join(__dirname,'dist'),
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            }
            
        ]
    },
    plugin:[
        new htmlWebpackPlugin({
            template:'./framework/index.html'
        })
    ]
};
