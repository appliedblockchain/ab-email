'use strict'

module.exports = {
  email: {
    provider: 'mailtrap',
    mailtrap: {
      host: 'smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: '59c7fbfcf38d14',
        pass: '04889ecedc451f'
      }
    },
    sendgrid: {
      apiKey: 'some-api-key'
    }
  }
}
