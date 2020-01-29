'use strict'

const nodemailer = require('nodemailer')

jest.mock('nodemailer')

const mockSendMailFn = jest.fn()

nodemailer.createTransport.mockReturnValue({
  sendMail: mockSendMailFn
})

const mailtrap = require('./mailtrap')

describe('provider: mailtrap', () => {
  it('should create transport', () => {
    const expected = {
      host: expect.any(String),
      port: expect.any(Number),
      auth: {
        user: expect.any(String),
        pass: expect.any(String)
      }
    }
    expect(nodemailer.createTransport).toHaveBeenCalledWith(expect.objectContaining(expected))
  })

  it('should call mailtrap.send', async () => {
    const expected = {
      to: 'to-mock',
      from: 'from-mock',
      subject: 'subject-mock',
      text: 'text-mock',
      html: 'html-mock'
    }

    await mailtrap.send(expected)

    expect(mockSendMailFn).toHaveBeenCalledWith(expected)
  })
})
