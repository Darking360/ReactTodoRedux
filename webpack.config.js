var path = require("path");
var webpack = require('webpack')
module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname,'app/components/Main.jsx'),
      Nav: path.resolve(__dirname,'app/components/Nav.jsx'),
      Timer: path.resolve(__dirname,'app/components/Timer.jsx'),
      Countdown: path.resolve(__dirname,'app/components/Countdown.jsx'),
      Clock: path.resolve(__dirname,'app/components/Clock.jsx'),
      jQuery: path.resolve(__dirname,'node_modules/jquery/dist/jquery.min.js')
    },
    extensions: ['.js','.jsx'],
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
