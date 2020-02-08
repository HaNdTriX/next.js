import React, { useEffect, useRef, Suspense } from 'react'

function interopDefault(mod) {
  return (mod && mod.default) || mod
}

const Hydrator = ({ load, ...props }) => {
  const ref = useRef()
  const triggerRef = useRef(false)
  let Child

  if (typeof window === 'object') {
    Child = React.lazy(
      () =>
        new Promise(resolve => {
          triggerRef.current = () => resolve(load())
        })
    )
  } else {
    Child = interopDefault(load())
  }

  useEffect(() => {
    new IntersectionObserver(async ([entry], obs) => {
      if (!entry.isIntersecting) return
      obs.unobserve(ref.current)
      setTimeout(() => {
        triggerRef.current()
      }, 10)
    }).observe(ref.current)
  }, [])

  return (
    <section ref={ref}>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Child {...props} />
      </Suspense>
    </section>
  )
}

export default Hydrator
