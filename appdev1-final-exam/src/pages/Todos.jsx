import React, { useEffect } from 'react'
import { useTheme } from '../app/ThemeContext'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../features/todos/todosSlice'
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoList'
import { useNavigate } from 'react-router-dom'


export default function Todos(){
const { theme, setTheme } = useTheme()
const changeTheme = (color) => setTheme(color)
const dispatch = useDispatch()
const navigate = useNavigate()
const { items, status } = useSelector(state => state.todos)


useEffect(() => {
// basic auth guard: ensure user present in session
const user = sessionStorage.getItem('user')
if(!user){
navigate('/login')
return
}
if(status === 'idle') dispatch(getTodos())
}, [dispatch, status, navigate])

useEffect(() => {
	const titleEl = document.getElementById('title')
	if(titleEl){
		if(theme === 'darker') titleEl.classList.add('darker-title')
		else titleEl.classList.remove('darker-title')
	}
}, [theme])


return (
<div className="page todos-page">
	<header id="header">
		<h1 id="title" className="brand">Just do it.</h1>
		<div className="flexrow-container">
	<button className="theme-selector standard-theme" aria-label="Standard theme" title="Standard theme" onClick={() => changeTheme('standard')} />
	<button className="theme-selector light-theme" aria-label="Light theme" title="Light theme" onClick={() => changeTheme('light')} />
	<button className="theme-selector darker-theme" aria-label="Darker theme" title="Darker theme" onClick={() => changeTheme('darker')} />
		</div>
	</header>
	<div className="todos-card">
<AddTodoForm />
<div className="timestamp">{new Date().toLocaleString()}</div>
<TodoList todos={items.slice(0, 10)} />
{/* template style often shows fewer; slice for nicer look */}
</div>
</div>
)
}