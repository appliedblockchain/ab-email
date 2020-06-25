'use strict'

const { compileTemplates } = require('./template')
const { send } = require('./email')

const delegateSend = (sendEmail, templateFn) => {
  return function ({ html, ...message }) {
    const params = Object.assign({ ...message }, templateFn({ html }))

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
