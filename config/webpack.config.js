const
  path = require('path'),
  webpack = require('webpack'),
  ExtractPlugin = require('extract-text-webpack-plugin'),
  HtmlPlugin = require('html-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  devServer = require('./devServer'),
  include = [
    path.resolve(process.cwd(), 'src/main/js')
  ];

module.exports = {
  devtool: 'inline-cheap-module-source-map',
  entry: {
    app: ['babel-polyfill', './src/main/js/src', './src/main/js/test']
  },
  output: {
    path: './src/main/resources/public/',
    filename: '[name].js'//,
    // save maps outside build folder
    // sourceMapFilename: 'maps/[file].map'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        // exclude: /node_modules/,
        include,
        query: {
          presets: ['stage-0', 'es2015', 'react']
        }
      },
      {test: /\.css$/,                              loader: ExtractPlugin.extract('style-loader', 'css-loader?importloader=1', 'postcss')},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,          loader: 'file'},
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=8192&amp;mimetype=application/font-woff'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,          loader: 'url?limit=8192&amp;mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,          loader: 'url?limit=8192&amp;mimetype=image/svg+xml'}
    ],

    preLoaders: [
      // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
      { test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [
    new HtmlPlugin({
      title: 'reactboot',
      template: './src/main/js/src/assets/index.html'
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractPlugin('app.css')
    /*
    new webpack.DefinePlugin({
      // Lots of library source code (like React) are based on process.env.NODE_ENV
      // (all development related code is wrapped inside a conditional that can be dropped if equal to "production"
      // this way you get your own react.min.js build)
      'process.env': { 'NODE_ENV': JSON.stringify('development') }
    })
    */
  ],
  postcss: function () {
    return [autoprefixer]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  devServer
};
