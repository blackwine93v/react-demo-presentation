const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: {
    main: "./src/index.js"
  },

  output: {
    path: "./build/client/",
    filename: "[name].js"
  },

  resolve: {
    extensions: [".js", ".css"]
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: "css-loader",
              query: {
                localIdentName: "[hash:8]",
                modules: true
              }
            }
          ]
        })
      }
    ]
  },

  plugins: [
    new ExtractTextPlugin({
      filename: "[name].css",
      allChunks: true
    })
  ]
};
