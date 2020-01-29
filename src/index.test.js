'use strict'

const AppliedBlockchainEmail = require('./index')
const email = require('./email')

jest.mock('./email')

describe('AppliedBlockchainEmail', () => {
  it('should create an instance with send by default if there are no templates', () => {
    const abEmail = new AppliedBlockchainEmail()

    expect(abEmail).toBeDefined()
    expect(abEmail.send).toEqual(expect.any(Function))
  })

  it('should create and instance with send and a template method', () => {
    const abEmail = new AppliedBlockchainEmail({
      test: {
        html: 'h1 #{name}'
      }
    })

    expect(abEmail).toBeDefined()
    expect(abEmail.send).toEqual(expect.any(Function))
    expect(abEmail.test).toEqual(expect.any(Object))
    expect(abEmail.test.send).toEqual(expect.any(Function))
  })

  it('should send a template email', async () => {
    const abEmail = new AppliedBlockchainEmail({
      test: {
        html: 'h1 #{name}'
      }
    })

    const expected = {
      to: 'mock-to',
      from: 'mock-from',
      subject: 'mock-subject',
      text: 'mock-test',
      html: '<h1>mock-name</h1>'
    }

    await abEmail.test.send({
      to: 'mock-to',
      from: 'mock-from',
      subject: 'mock-subject',
      text: 'mock-test',
      html: {
        name: 'mock-name'
      }
    })

    expect(email.send).toHaveBeenCalledWith(expect.objectContaining(expected))
  })
})
