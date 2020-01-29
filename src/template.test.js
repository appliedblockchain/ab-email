'use strict'

const { compileTemplates } = require('./template')

describe('template', () => {
  it('should return and empty array if templates parameter is undefined', () => {
    expect(compileTemplates(undefined)).toEqual([])
  })

  it('should return and empty array if templates parameter is empty object', () => {
    expect(compileTemplates({})).toEqual([])
  })

  it('should return an array with a template object', () => {
    const result = compileTemplates({
      test: {
        html: 'div'
      }
    })
    const expected = {
      name: 'test',
      fn: expect.any(Function)
    }

    expect(result).toEqual(expect.arrayContaining([ expected ]))
  })

  it('should return an array with a template object', () => {
    const result = compileTemplates({
      test: {
        html: 'div'
      }
    })
    const expected = { html: '<div></div>' }
    const templateObj = result[0]

    expect(templateObj.fn()).toEqual(expected)
  })
})
