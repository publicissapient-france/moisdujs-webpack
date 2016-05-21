var webpack = require('webpack');

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
  module: {
    loaders: [
      {
        test: /\.html$/, // si je rencontre un import de fichier html...
        loader: 'html' //... alors j'utilise le loader html
      },
      {
        test: /\.css/, // si je rencontre un import de fichier css...
        loader: 'style!css' //... alors j'utilise les loaders style et css
      },
      {
        test: /\.js$/, // si je rencontre un import de fichier js...
        exclude: [/node_modules/], //... qui n'est pas dans /node_modules/...
        loader: 'babel' //... alors j'utilise le loader babel
      }
      // pour tout le reste, webpack utilise le js loader (built-in)
    ]
  }
};