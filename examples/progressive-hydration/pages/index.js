import React from 'react'
import Hydrator from '../components/Hydrator'

export default function HomePage() {
  return (
    <main>
      <style jsx>{`
        main {
          max-width: 60vw;
          margin: 0 auto;
        }
      `}</style>
      <h1>Naïve Progressive Hydration using Next.js</h1>

      <h2>Info</h2>
      <p>
        This is a very basic example of implementing progressive hydration using
        Next.js. The Components below uses Intersection Observer to hydrate, as
        soon the element gets into viewport.
      </p>

      <h2>Issues</h2>
      <ul>
        <li>
          Doesn't capture events before Hydration (Suspense will fix that in the
          future).
        </li>
        <li>Setup feels a bit clunky (Babel will fix that in the future).</li>
      </ul>

      <h2>Code</h2>
      <p>
        The code can be found under{' '}
        <a href="https://github.com/HaNdTriX/next.js/tree/progressive-hydration">
          https://github.com/HaNdTriX/next.js/tree/progressive-hydration
        </a>
        . Please note that this is just an experiment and is not meant to be
        used in production!
      </p>

      <Hydrator
        load={() =>
          process.browser
            ? import('../components/SampleComponent')
            : require('../components/SampleComponent')
        }
      />

      <Hydrator
        load={() =>
          process.browser
            ? import('../components/SampleComponent2')
            : require('../components/SampleComponent2')
        }
      />

      <Hydrator
        load={() =>
          process.browser
            ? import('../components/SampleComponent3')
            : require('../components/SampleComponent3')
        }
      />

      <Hydrator
        load={() =>
          process.browser
            ? import('../components/SampleComponent4')
            : require('../components/SampleComponent4')
        }
      />
    </main>
  )
}
