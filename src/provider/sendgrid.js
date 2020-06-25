'use strict'

const sendgridMail = require('@sendgrid/mail')
const config = require('config')

const apiKey = config.get('email.sendgrid.apiKey')

sendgridMail.setApiKey(apiKey)

const send = async ({ attachments, cc, bcc, to, from, subject, text, html }) => {
  const msg = {
    attachments,
    bcc,
    cc,
    from,
    html,
    subject,
    text,
    to
  }

  return sendgridMail.send(msg)
}

module.exports = { send }
