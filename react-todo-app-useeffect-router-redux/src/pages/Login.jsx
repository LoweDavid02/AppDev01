import { useEffect, useState } from 'react'


function Login() {
const [username, setUsername] = useState('')
const [password, setPassword] = useState('')
const [users, setUsers] = useState([])


const SECRET = import.meta.env.VITE_APP_SECRET_PASSWORD


useEffect(() => {
// fetch a small list of users to login from
fetch('https://jsonplaceholder.typicode.com/users?_limit=10')
.then((response) => response.json())
.then((data) => setUsers(data))
}, [])


function handleLogin() {
const foundUser = users.find((user) => user.username === username)


if (!foundUser) {
alert('Username not found!')
return
}


if (password !== SECRET) {
alert('Incorrect password!')
return
}


localStorage.setItem('loggedInUser', JSON.stringify(foundUser))
// navigate to todos page
window.location.href = '/todos'
}


return (
<div style={{ padding: 16 }}>
<h2>Login</h2>


<input type="text" placeholder="Enter username (e.g., Bret)" value={username} onChange={(e) => setUsername(e.target.value)} />
<br />
<input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
<br />
<button onClick={handleLogin}>Login</button>


<div style={{ marginTop: 12 }}>
<strong>Tip:</strong> try a username from JSONPlaceholder (e.g., "Bret" or "Antonette") and the password in your `.env` file.
</div>
</div>
)
}


export default Login