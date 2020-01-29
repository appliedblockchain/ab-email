'use strict'

const config = require('config')
const providerName = config.get('email.provider')
const provider = require(`./provider/${providerName}`)

module.exports = provider
