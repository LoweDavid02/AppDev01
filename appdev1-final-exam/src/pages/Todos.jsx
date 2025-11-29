import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../features/todos/todosSlice'
import AddTodoForm from '../components/AddTodoForm'
import TodoList from '../components/TodoList'
import { useNavigate } from 'react-router-dom'


export default function Todos(){
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


return (
<div className="page todos-page">
<h1 className="brand">Just do it.</h1>
<div className="todos-card">
<AddTodoForm />
<div className="timestamp">{new Date().toLocaleString()}</div>
<TodoList todos={items.slice(0, 10)} />
{/* template style often shows fewer; slice for nicer look */}
</div>
</div>
)
}