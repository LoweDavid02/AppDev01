import React from 'react'

export default function DefaultNamed() {
  return (
    <section>
      <h3>Default vs Named exports</h3>
      <p>
        A file can have one default export and many named exports. Default
        imports can be renamed locally; named imports must match exported names.
      </p>
    </section>
  )
}