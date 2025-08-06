const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx', // seu ponto de entrada
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true, // limpa a pasta dist a cada build
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'], // resolve sem precisar de extensão
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // transpila TS/TSX
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // permite importar CSS
        use: ['style-loader', 'css-loader'],
      },
      {
           test: /\.(png|jpe?g|gif|pdf|docx)$/i,
        type: 'asset/resource',
        generator: {
            // Isso garante que os assets sejam copiados para a pasta 'assets' dentro de 'dist'
            filename: 'assets/[name][ext]'}
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // usa seu HTML como base

    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'), // serve estáticos do public/
    },
    compress: true,
    port: 3000,
    open: true, // abre no navegador
    hot: true,
  },
  mode: 'development', // troca pra 'production' se for build final
};
