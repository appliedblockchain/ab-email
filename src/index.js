'use strict'

const { compileTemplates } = require('./template')
const { send } = require('./email')

const delegateSend = (sendEmail, templateFn) => {
  return function ({ to, from, subject, text, html }) {
    const params = Object.assign({ to, from, subject, text }, templateFn({ html }))

    return sendEmail.call(undefined, params)
  }
}

class AppliedBlockchainEmail {
  constructor(templates = {}) {
    const compiledTemplates = compileTemplates(templates)
    const sendTemplatesFn = compiledTemplates.reduce((acc, { name, fn }) => {
      acc[name] = { send: delegateSend(send, fn) }

      return acc
    }, {})

    Object.assign(this, { send }, sendTemplatesFn)
  }
}

module.exports = AppliedBlockchainEmail
