var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname, // la racine de l'app (fs)
  entry: {
    app: [ './public/app.js' ] // les points d'entrée de l'app
  },
  output: {
    path: __dirname + '/dist', // le path absolu de l'output (fs)
    filename: 'app.js', // le nom de l'output
    publicPath: '/dist/' // le path de l'output relatif au host
  },
  plugins: [
    new ExtractTextPlugin('styles/app.css'), // le path et le nom du fichier extrait
    new webpack.ProvidePlugin(
      {
      $: "jquery", // la variable $ référence globalement jQuery
      jQuery: "jquery" // ...ainsi que la variable jQuery
    })
  ],
  module: {
    loaders: [
      {
        test: /\.html$/, // si je rencontre un import de fichier html...
        loader: 'html' //... alors j'utilise le loader html
      },
      {
        test: /\.css/, // si je rencontre un import de fichier css...
        loader: ExtractTextPlugin.extract('style', 'css') //... alors j'utilise les loaders style et css
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