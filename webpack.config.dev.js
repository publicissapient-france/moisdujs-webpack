var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CompressionPlugin = require('compression-webpack-plugin');
var AssetsPlugin = require('assets-webpack-plugin');

module.exports = {
  context: __dirname, // la racine de l'app (fs)
  entry: {
    app: [ './public/app.js' ], // les points d'entrée de l'app
    vendors: [ 'bootstrap' ] // <= va faire un require('bootstrap')
  },
  output: {
    path: __dirname + '/dist', // le path absolu de l'output (fs)
    filename: '[name].js', // le nom de l'output
    publicPath: '/dist/' // le path de l'output relatif au host
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name:'vendors', fileName: 'vendors-[hash].js' }), // le nom de l'entry et le nom de sortie
    new AssetsPlugin(),
    new CompressionPlugin(),
    new ExtractTextPlugin('styles/app.css'), // le path et le nom du fichier extrait
    new webpack.ProvidePlugin({
      $: "jquery", // la variable $ référence globalement jQuery
      jQuery: "jquery" // ...ainsi que la variable jQuery
    })
  ],
  eslint: {
    configFile: '.eslintrc' // fichier de références des règles eslint
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/, // si je rencontre des fichiers js...
        exclude: /node_modules/, // qui ne sont pas dans /node_modules...
        loader: "eslint" //... alors j'utilise eslint-loader
      }
    ],
    loaders: [
      {
        test: /\.html$/, // si je rencontre un import de fichier html...
        loader: 'html' //... alors j'utilise le loader html
      },
      {
        test: /\.less|css$/, // si je rencontre un import de fichier less ou css...
        loader: ExtractTextPlugin.extract('css?sourceMap!less?sourceMap') //... alors j'utilise les loaders less et css
      },
      {
        test: /\.js$/, // si je rencontre un import de fichier js...
        exclude: [/node_modules/], //... qui n'est pas dans /node_modules/...
        loader: 'babel' //... alors j'utilise le loader babel
      },
      {
        test: /\.(svg|woff|woff2)$/, // si je rencontre des fichiers svg ou woff ou woff2 < à 10kb, sinon je passe à file-loader...
        loader: 'url-loader?limit=10000&name=assets/[name].[ext]' //... alors j'utilise l'url-loader et je copie les fichiers
      },
      {
        test: /\.(eot|ttf)$/, // si je rencontre des fichiers eot ou ttf...
        loader: 'file-loader?name=assets/[name].[ext]' //.. alors j'utilise le file-loader et je copie les fichiers
      }
      // pour tout le reste, webpack utilise le js loader (built-in)
    ]
  }
};