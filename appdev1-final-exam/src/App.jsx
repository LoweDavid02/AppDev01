import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/HOme'
import Login from './pages/Login'
import Todos from './pages/Todos'

function App(){
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/login" element={<Login />} />
<Route path="/todos" element={<Todos />} />
<Route path="*" element={<Navigate to='/' replace />} />
</Routes>
)
}

export default App