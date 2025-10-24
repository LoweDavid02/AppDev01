import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Import all components
import One from './Components/One'
import Two from './components/Two'
import Three from './components/Three'
import Four from './components/Four'
import Five from './components/Five'
import Six from './components/Six'
import Seven from './components/Seven'
import Eight from './components/Eight'
import Nine from './Components/Nine'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
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

  
      <div style={{ textAlign: "left", marginTop: "3rem" }}>
        <h2>🧩 React - Describing the UI</h2>
        <hr />

        <section>
          <h3>1️⃣ How to Write Your First React Component</h3>
          <One />
        </section>

        <section>
          <h3>2️⃣ Multi-Component File Example</h3>
          <Two />
        </section>

        <section>
          <h3>3️⃣ Add Markup with JSX</h3>
          <Three />
        </section>

        <section>
          <h3>4️⃣ Use Curly Braces with JSX</h3>
          <Four />
        </section>

        <section>
          <h3>5️⃣ Configure Components with Props</h3>
          <Five />
        </section>

        <section>
          <h3>6️⃣ Conditional Rendering</h3>
          <Six />
        </section>

        <section>
          <h3>7️⃣ Rendering Multiple Components</h3>
          <Seven />
        </section>

        <section>
          <h3>8️⃣ Pure Components (Avoid Bugs)</h3>
          <Eight />
        </section>

        <section>
          <h3>9️⃣ Why Understanding Your UI as Trees is Useful</h3>
          <Nine />
        </section>
      </div>
    </>
  )
}

export default App
