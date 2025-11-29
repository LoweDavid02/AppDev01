import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../app/ThemeContext'


export default function Home(){
const { theme } = useTheme()
return (
<div className="page center">
<h1 id="title" className="brand">Just do it.</h1>
<div style={{height:18}} />
<Link to="/login" className={`ghost ${theme}-button`}>Login</Link>
<Link to="/todos" className={`ghost ${theme}-button`}>View Todos</Link>
</div>
)
}