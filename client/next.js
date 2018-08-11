import initNext from './'

initNext()
  .catch((err) => {
    console.error(`${err.message}\n${err.stack}`)
  })
