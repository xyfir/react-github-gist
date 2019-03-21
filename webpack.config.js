const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: process.env.NODE_ENV,

  entry: './src/ReactGithubGist.tsx',

  output: {
    libraryTarget: 'umd',
    filename: 'ReactGithubGist.js',
    library: 'ReactGithubGist',
    path: path.resolve(__dirname, 'dist')
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: ['.tsx']
  },

  module: {
    rules: [
      {
        test: /\.tsx$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            ['@babel/preset-typescript', { isTSX: true, allExtensions: true }],
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: [
                    'last 3 Chrome versions',
                    'last 3 Firefox versions'
                  ]
                }
              }
            ],
            '@babel/preset-react'
          ],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],

  externals: {
    react: 'react'
  }
};
