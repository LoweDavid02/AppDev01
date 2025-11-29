import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import todosAPI from '../api/todosAPI'
import { useTheme } from '../app/ThemeContext'


export default function Login(){
const { theme } = useTheme()
const [users, setUsers] = useState([])
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const navigate = useNavigate()


useEffect(() => {
async function load(){
const res = await todosAPI.fetchUsersLimited()
setUsers(res.data)
}
load()
}, [])


const handleLogin = (e) => {
e.preventDefault()
const found = users.find(u => u.username.toLowerCase() === username.toLowerCase())
// Use root .env or fallback to the intended local secret for development convenience
const secret = import.meta.env.VITE_APP_SECRET_PASSWORD || 'SECRET123'
if(found && password === secret){
// simple success: store user in session storage
sessionStorage.setItem('user', JSON.stringify(found))
navigate('/todos')
} else {
alert('Invalid username or password')
}
}


return (
<div className="page center">
<h1 className="brand small">Login</h1>
<form className="login-form" onSubmit={handleLogin}>
<select value={username} onChange={e=>setUsername(e.target.value)} className={`${theme}-input`}>
<option value="">Select user</option>
{users.map(u => <option key={u.id} value={u.username}>{u.username}</option>)}
</select>
<input className={`${theme}-input`} type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
<button className={`${theme}-button`}>Sign in</button>
</form>
</div>
)
}