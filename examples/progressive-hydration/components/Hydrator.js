import React, { memo, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

function interopDefault(mod) {
  return (mod && mod.default) || mod
}

const ServerHydrator = ({ load, ...props }) => {
  const Child = interopDefault(load())
  return (
    <section>
      <Child {...props} />
    </section>
  )
}

const ClientHydrator = memo(
  ({ load, ...props }) => {
    const ref = useRef()
    useEffect(() => {
      new IntersectionObserver(async ([entry], obs) => {
        if (!entry.isIntersecting) return
        obs.unobserve(ref.current)
        const Child = interopDefault(await load())
        ReactDOM.hydrate(<Child {...props} />, ref.current)
      }).observe(ref.current)
    })
    return (
      <section
        ref={ref}
        dangerouslySetInnerHTML={{ __html: '' }}
        suppressHydrationWarning
      />
    )
  },
  () => true
)

export default process.browser ? ClientHydrator : ServerHydrator
