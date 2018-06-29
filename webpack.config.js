const webpack = require('webpack')

module.exports = {
    entry: './src/components/index.jsx',
    output: {
        path: __dirname + '/src',
        filename: './app.js'
    },
    devServer: {
        port: 8081,
        contentBase: './src'        
    },
    resolve: {
        extensions: ['.js','.jsx'], 
        alias: {
            modules: __dirname + '/node_modules'
        }
    },     
    module: {
        rules: [
          {
            test: /\.jsx$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015', 'react']
              }
            }
          },{
            test: /\.scss$/,
            use: [
              { loader: "style-loader" },
              { loader: "css-loader" },
              { loader: "sass-loader" }
            ]
          }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default']
          })
    ]
}