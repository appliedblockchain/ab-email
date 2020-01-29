'use strict'

const pug = require('pug')

const compileTemplate = ({ html, filename }) => {
  return {
    html: pug.compile(html, { filename })
  }
}

const renderTemplate = (templateFns, locals = {}) => {
  return {
    html: templateFns.html(locals.html || {})
  }
}

const delegateRenderTemplate = (renderTemplateFn, templateFns) => {
  return function (locals) {
    return renderTemplateFn(templateFns, locals)
  }
}

const compileTemplates = (templates = {}) => {
  const compiledTemplates = Object.keys(templates).map(templateName => {
    const template = templates[templateName]
    const templateFns = compileTemplate(template)

    return {
      name: templateName,
      fn: delegateRenderTemplate(renderTemplate, templateFns)
    }
  }, {})

  return compiledTemplates
}

module.exports = { compileTemplates }
