var webpack = require('webpack')

module.exports = {
  entry : './index.js',

  output : {
    path:__dirname + "/build",
    filename: 'bundle.js',
  },

  devServer : {
    inline : true,
    port : 8080,
    historyApiFallback: true,
  },

  module : {
    loaders: [
       {
         test: /\.(js|jsx)$/,
          loader:'babel-loader',
          exclude: ["./node_modules/"]
       },
       {
         test: /\.scss$/,
         loaders: ['style-loader', 'css-loader', 'sass-loader'],
         exclude: ["./node_modules/"]
       },
       {
         test: /\.(png|jpg|gif)$/,
         loader : 'file-loader',
         options : {
         }
       }
     ]
   },
   plugins: [
     new webpack.DefinePlugin({
      //  API_URL : JSON.stringify("http://prod.buscaya.com.mx/api/"),
       GA_ID : JSON.stringify("UA-107879815-1"),
     }),
   ],
}
