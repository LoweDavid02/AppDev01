<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react'
=======
import { useState } from 'react'
>>>>>>> d85403c (Re-committing this projects, and doing again because it was deleted by conflicts and confussions that cuase a wrong commands)
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

<<<<<<< HEAD
import Profile from './components/Profile'
import Gallery from './components/Gallery'
import RootComponent from './components/topics/RootComponents'
import ImportExport from './components/topics/ImportExport'
import DefaultNamed from './components/topics/DefaultNamed'
import MultipleExports from './components/topics/MultipleExports'
import Recap from './components/topics/Recap'
import Challenge from './components/topics/Challenge'

=======
>>>>>>> d85403c (Re-committing this projects, and doing again because it was deleted by conflicts and confussions that cuase a wrong commands)
function App() {
  const [count, setCount] = useState(0)

  return (
<<<<<<< HEAD
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
=======
import './App.css'
import TodoList from './components/TodoList'
import Bio from './components/Bio'
import JSXRulesDemo from './components/JSXRulesDemo'

function App() {
  return (
    <div className="app">
      <h1>Learning JSX</h1>
      
      <section>
        <h2>Todo List Example</h2>
        <TodoList />
      </section>

      <section>
        <h2>Bio Example</h2>
        <Bio />
      </section>

      <section>
        <h2>JSX Rules Demonstration</h2>
        <JSXRulesDemo />
      </section>
>>>>>>> 6fae677 (Done with Setup components and file inside)
    </div>
=======
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
>>>>>>> d85403c (Re-committing this projects, and doing again because it was deleted by conflicts and confussions that cuase a wrong commands)
  )
}

export default App
