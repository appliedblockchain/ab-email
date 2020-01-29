const email = require('./email')

describe('email', () => {
  it('should expose an object with `send` method', () => {
    expect(email).toBeDefined()
    expect(email.send).toEqual(expect.any(Function))
  })
})
