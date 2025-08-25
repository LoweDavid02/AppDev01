import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    
   <div class="card">
  <h1>About Me</h1>
  <hr />

  <p><strong>Name:</strong> Lowe David C. Tubat</p>
  <p><strong>Course/Program:</strong> Bachelor of Science In Information System 3-B</p>
  <p><strong>Fun Fact:</strong> I can make portraits.</p>

  <hr />

  <h2>Why I Want to Learn React</h2>
  <p>
    I want to learn React because it is one of the most popular and in-demand
    JavaScript libraries for building modern, interactive, and dynamic web
    applications. React makes it easier to create reusable components, manage
    application state efficiently, and build user interfaces that are both
    fast and responsive. Learning React will not only improve my front-end
    development skills but also open more opportunities for me in web
    development projects, both academically and professionally.
  </p>
</div>


      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
     
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
