const mongoose = require('mongoose')

const miConfig = require('./config.js')

var connectionURL = miConfig.connectionURL

mongoose.connect( connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true
})
