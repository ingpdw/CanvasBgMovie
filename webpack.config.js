var webpack = require( 'webpack' );

module.exports = {
  context: __dirname + '/_src',
  entry: ['./js/App.js'],
  output: {
    filename: 'index.js',
    path: __dirname + '/js',
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin()
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}
