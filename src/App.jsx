import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Profile from './components/Profile'
import Gallery from './components/Gallery'
import RootComponent from './topics/RootComponent'
import ImportExport from './topics/ImportExport'
import DefaultNamed from './topics/DefaultNamed'
import MultipleExports from './topics/MultipleExports'
import Recap from './topics/Recap'
import Challenge from './topics/Challenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{ padding: 20, fontFamily: 'system-ui, Arial' }}>
      <header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1 style={{ marginLeft: 8 }}>React: Importing & Exporting Components</h1>
      </header>

      <main>
        <section style={{ marginTop: 18 }}>
          <h2>Profile (single component)</h2>
          <Profile />
        </section>

        <section style={{ marginTop: 18 }}>
          <h2>Gallery (uses Profile)</h2>
          <Gallery />
        </section>

        <hr style={{ margin: '24px 0' }} />

        <RootComponent />
        <ImportExport />
        <DefaultNamed />
        <MultipleExports />
        <Recap />
        <Challenge />

        <div style={{ marginTop: 18 }} className="card">
          <button onClick={() => setCount((c) => c + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
      </main>
    </div>
  )
}

export default App
