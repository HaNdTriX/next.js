const withTM = require('next-plugin-transpile-modules')
const withCSS = require('@zeit/next-css')

module.exports = withCSS(
  withTM({
    transpileModules: [
      'framework7',
      'framework7-react'
    ]
  })
)
