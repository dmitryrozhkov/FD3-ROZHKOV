const path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = { 
    entry: "./src/index.js", // основной файл приложения
    output:{ 
        path: path.resolve(__dirname, 'dist'), // путь к каталогу выходных файлов
        filename: "[name].js"  // название создаваемого файла 
    }, 
    devtool:'source-map',
    module:{ 
        rules:[
            { 
                test: /\.jsx?$/, // какие файлы обрабатывать
                exclude: /node_modules/, // какие файлы пропускать
                use: { loader: "babel-loader" }
            },
            {
                test: /\.css$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader']
          })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: { name: '[path][name].[ext]',
                               publicPath: 'assets/'
                             }  
                  }
                ]
              }
                        
        ] 
    },    
    plugins: [ 
        new ExtractTextPlugin({filename: 'style.css'})
      ]
}