import { Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Login from './pages/Login'
import Todos from './pages/Todos'

function App() {
  return (
    <div className="App">
      <header>
        <h1>React Todos</h1>
        <nav>
          <Link to="/">Home</Link> | <Link to="/todos">Todos</Link> |{' '}
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
