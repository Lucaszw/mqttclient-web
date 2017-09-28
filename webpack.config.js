module.exports = {
  entry: './WebMqttClient.js',
  output: {
    filename: 'bundle.js',
    // use library + libraryTarget to expose module globally
    library: 'MQTTClient',
    libraryTarget: 'var'
  }
}
