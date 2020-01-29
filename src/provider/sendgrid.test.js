'use strict'

const sendgridMail = require('@sendgrid/mail')
const sendgrid = require('./sendgrid')

jest.mock('@sendgrid/mail', () => ({
  setApiKey: jest.fn(),
  send: jest.fn().mockResolvedValue()
}))

describe('provider: sendgrid', () => {
  it('should set the api key', () => {
    expect(sendgridMail.setApiKey).toHaveBeenCalledWith(expect.any(String))
  })

  it('should call sendgrid.send', async () => {
    const mockParam = {
      to: 'to-mock',
      from: 'from-mock',
      subject: 'subject-mock',
      text: 'text-mock',
      html: 'html-mock'
    }

    await sendgrid.send(mockParam)

    expect(sendgridMail.send).toHaveBeenCalledWith(mockParam)
  })
})
