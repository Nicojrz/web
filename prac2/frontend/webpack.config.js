const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: {
    app: "./src/Aplicacion.jsx",
    datos: "./src/Datos.jsx"
  },
  output: {
    path: path.resolve(__dirname, '../backend/public'),
    filename: "[name].js",
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './plantilla/index.html',
      path: path.resolve(__dirname, '../backend/public'),
      filename: 'index.html',
      chunks: ['app']
    }),
    new HtmlWebpackPlugin({
      template: './plantilla/datos.html',
      path: path.resolve(__dirname, '../backend/public'),
      filename: 'datos.html',
      chunks: ['datos']
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 8080, // Puerto del servidor
    open: true, // Abrir navegador automáticamente
    hot: true, // Habilitar Hot Module Replacement (HMR)
    historyApiFallback: true, // Aplicaciones SPA
  }
}