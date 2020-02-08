import React, { useState, useEffect } from 'react'

export default () => {
  const [mounted, setMounted] = useState(false)
  const [count, setCount] = useState(0)
  useEffect(() => {
    setMounted(true)
  }, [])
  return (
    <button onClick={() => setCount(count => count + 2)}>
      <style jsx>{`
        button {
          width: 100%;
          height: 200px;
          background: ${mounted ? 'red' : 'grey'};
          text-align: center;
          font-size: 20px;
          margin-bottom: 50vh;
        }
      `}</style>
      Component 1:
      <br />
      Hydrated: {mounted ? 'true' : 'false'}
      <br />
      Count: {count}
    </button>
  )
}
