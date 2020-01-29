'use strict'

const sendgridMail = require('@sendgrid/mail')
const config = require('config')

const apiKey = config.get('email.sendgrid.apiKey')

sendgridMail.setApiKey(apiKey)

const send = async ({ to, from, subject, text, html }) => {
  const msg = {
    to,
    from,
    subject,
    text,
    html
  }

  return sendgridMail.send(msg)
}

module.exports = { send }
