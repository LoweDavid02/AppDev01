import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../features/todos/todosSlice'


import { useTheme } from '../app/ThemeContext'
export default function TodoItem({ todo, theme: themeProp }){
const { theme: themeCtx } = useTheme()
const theme = themeProp || themeCtx
const dispatch = useDispatch()


const toggle = () => {
dispatch(updateTodo({ id: todo.id, payload: { ...todo, completed: !todo.completed } }))
}


const remove = () => dispatch(deleteTodo(todo.id))


return (
<div className={`todo ${theme}-todo todo-item ${todo.completed ? 'completed' : ''}`}>
<label>
<input className={`check-btn ${theme}-button`} type="checkbox" checked={todo.completed} onChange={toggle} />
<span className="todo-title">{todo.title}</span>
</label>
<div className="todo-actions">
<button onClick={remove} className={`delete-btn ${theme}-button`} aria-label="delete">x</button>
</div>
</div>
)
}