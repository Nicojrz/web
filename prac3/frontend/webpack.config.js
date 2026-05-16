const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('dns');

module.exports = {
    mode: "development",
    entry: "./src/Aplicacion.jsx",
    output: {
    path:path.resolve(__dirname, '../backend/public'),
    filename: "main.js",
    clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: './plantilla/index.html', // Ruta plantilla HTML
          path:path.resolve(__dirname, '../backend/public'),
          filename: 'index.html', // Nombre del archivo de salida
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
            
          },
          {
        test: /\.css$/,         // Procesa archivos .css
        use: [
          'style-loader', 
          {
            loader: 'css-loader',
            options: {
              modules: false,    // Esto permite usar className={styles.miCanvas}
            }
          }
        ]
      },
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
    static: {
      directory: path.resolve(__dirname, '../backend/public'), // Servir archivos desde esta carpeta
    },
  }            
  }
