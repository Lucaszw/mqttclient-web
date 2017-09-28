var webpack = require('webpack');

module.exports = {
    entry: "./WebMqttClient.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: []
    },
    resolve: {
      modules: [
        "node_modules"
      ]
    }
};
