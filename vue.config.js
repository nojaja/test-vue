const path = require('path');
const src = __dirname + "/src";
const dist = __dirname + "/dist";
const webpack = require('webpack');
const MonacoWebpackPlugin = require('monaco-editor-webpack-plugin');
//require('jquery-ui/ui/core.js');
//require('jquery-ui/ui/widgets/resizable.js');

module.exports = {
  configureWebpack: {
    plugins: [
      new MonacoWebpackPlugin({
        // https://github.com/Microsoft/monaco-editor-webpack-plugin#options
        // Include a subset of languages support
        // Some language extensions like typescript are so huge that may impact build performance
        // e.g. Build full languages support with webpack 4.0 takes over 80 seconds
        // Languages are loaded on demand at runtime
        languages: ['javascript', 'css', 'html', 'typescript']
      })
    ]
  }
};