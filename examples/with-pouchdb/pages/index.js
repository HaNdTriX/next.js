import React, { Suspense } from 'react'
import { useFind, useDB } from 'react-pouchdb'

export default function IndexPage() {
  const db = useDB()

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = new FormData(event.target)
    db.post(Object.fromEntries(data))
    event.target.reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="label" type="text" />
        <button>Add</button>
      </form>

      <Suspense fallback="loading todos...">
        <Todos />
      </Suspense>
    </>
  )
}

function Todos() {
  const db = useDB()
  const docs = useFind({
    selector: {
      label: { $gte: null },
    },
  })

  return (
    <ul>
      {docs.map((doc) => (
        <li key={doc._id}>
          <button onClick={() => db.put({ ...doc, checked: !doc.checked })}>
            Toggle
          </button>
          <button onClick={() => db.remove(doc)}>Remove</button>{' '}
          {doc.checked ? <strike>{doc.label}</strike> : doc.label}
        </li>
      ))}
    </ul>
  )
}
