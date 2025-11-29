import React from 'react'
import { Link } from 'react-router-dom'


export default function Home(){
return (
<div className="page center">
<h1 className="brand">Just do it.</h1>
<div style={{height:18}} />
<Link to="/login" className="ghost">Login</Link>
<Link to="/todos" className="ghost">View Todos</Link>
</div>
)
}