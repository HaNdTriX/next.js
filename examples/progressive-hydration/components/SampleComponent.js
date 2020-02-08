import React, { useState, useEffect } from 'react'

export default () => {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <button
      onClick={() => setCount(count => count + 2)}
      style={{
        width: '100%',
        height: 200,
        background: mounted ? 'red' : 'grey',
        textAlign: 'center',
        fontSize: 20,
        marginBottom: '50vh',
      }}
    >
      Component 1:
      <br />
      Hydrated: {mounted ? 'true' : 'false'}
      <br />
      Count: {count}
    </button>
  )
}
