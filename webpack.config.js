var path = require("path");
var webpack = require('webpack')
module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',

  },
  plugins: [
    new webpack.ProvidePlugin({
      '$' : 'jquery',
      'jQuery' : 'jquery'
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
      Weather: path.resolve(__dirname,'app/components/Weather.jsx'),
      About: path.resolve(__dirname,'app/components/About.jsx'),
      Examples: path.resolve(__dirname,'app/components/Examples.jsx'),
      WeatherForm: path.resolve(__dirname,'app/components/WeatherForm.jsx'),
      WeatherMessage: path.resolve(__dirname,'app/components/WeatherMessage.jsx'),
      openWeatherMap: path.resolve(__dirname,'app/api/openWeatherMap.jsx'),
      ErrorModal: path.resolve(__dirname,'app/components/ErrorModal.jsx')
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
