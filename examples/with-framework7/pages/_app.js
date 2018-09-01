import App, {Container} from 'next/app'
import React from 'react'
import Framework7 from 'framework7'
import Framework7React, { App as F7App } from 'framework7-react'

import 'framework7/css/framework7.min.css'

if (process.browser) {
  Framework7.use(Framework7React)
}

export default class PatchedApp extends App {
  render () {
    const {Component, pageProps} = this.props
    return (
      <Container>
        <F7App>
          <Component {...pageProps} />
        </F7App>
      </Container>
    )
  }
}
