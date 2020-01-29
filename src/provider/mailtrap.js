'use strict'

const nodemailer = require('nodemailer')
const config = require('config')

const mailtrapConfig = config.get('email.mailtrap')
const transporter = nodemailer.createTransport(mailtrapConfig)

const send = async ({ to, from, subject, text, html }) => {
  const mailOptions = {
    from,
    to,
    subject,
    text,
    html
  }

  return transporter.sendMail(mailOptions)
}

module.exports = { send }
