const path = require('path');

module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss'],
    alias: {
      '@': path.join(__dirname, '../../src'),
      '@components': path.join(__dirname, '../../src/components'),
      '@hooks': path.join(__dirname, '../../src/hooks'),
      '@assets': path.join(__dirname, '../../src/assets'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
      {
        test: /\.(s[ac]ss|css)$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
        options: {
          name: 'imgs/[contenthash].[ext]',
        },
      },
    ],
  }
};
