// Build by running: "webpack" (not "webpack .")

var config = {
  context: __dirname,
  entry: './WebMqttClient.js',
  output: {
    filename: 'bundle.js',
    // use library + libraryTarget to expose module globally
    library: 'MQTTClient',
    libraryTarget: 'commonjs2'
  }
};

var webConfig = {
  entry: './WebMqttClient.js',
  output: {
    filename: 'bundle.web.js',
    // use library + libraryTarget to expose module globally
    library: 'MQTTClient',
    libraryTarget: 'var'
  }
};

module.exports = [config, webConfig];
