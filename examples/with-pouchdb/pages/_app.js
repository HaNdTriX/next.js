import { Suspense } from 'react'
import { PouchDB } from 'react-pouchdb'

export default function CustomApp({ Component, pageProps }) {
  return (
    <PouchDB name="todos">
      <Suspense fallback="loading...">
        <Component {...pageProps} />
      </Suspense>
    </PouchDB>
  )
}
