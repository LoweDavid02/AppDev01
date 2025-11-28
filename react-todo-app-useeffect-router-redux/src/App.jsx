import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Todos from './pages/Todos'


function App() {
return (
<BrowserRouter>
<nav style={{ padding: 12 }}>
<Link to="/" style={{ marginRight: 10 }}>Home</Link>
<Link to="/login" style={{ marginRight: 10 }}>Login</Link>
<Link to="/todos">Todos</Link>
</nav>


<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/todos" element={<Todos />} />
</Routes>
</BrowserRouter>
)
}


export default App