import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todos/todosSlice'


import { useTheme } from '../app/ThemeContext'
export default function AddTodoForm(){
const { theme } = useTheme()
const [title, setTitle] = useState('')
const dispatch = useDispatch()


const handleSubmit = async (e) => {
e.preventDefault()
if(!title.trim()) return
// JSONPlaceholder accepts POST and returns created item with id
await dispatch(addTodo({ title, completed: false, userId: 1 }))
setTitle('')
}


return (
<form className="add-form" onSubmit={handleSubmit}>
<input
	className={`add-input ${theme}-input`}
placeholder="Add a task."
value={title}
onChange={(e) => setTitle(e.target.value)}
/>
<button className={`add-button ${theme}-button`}>I Got This!</button>
</form>
)
}