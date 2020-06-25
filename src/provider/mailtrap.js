'use strict'

const nodemailer = require('nodemailer')
const config = require('config')

const mailtrapConfig = config.get('email.mailtrap')
const transporter = nodemailer.createTransport(mailtrapConfig)

const send = async ({ attachments, cc, bcc, to, from, subject, text, html }) => {
  const mailOptions = {
    attachments,
    bcc,
    cc,
    from,
    html,
    subject,
    text,
    to
  }

  return transporter.sendMail(mailOptions)
}

module.exports = { send }
