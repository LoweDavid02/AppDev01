import React from 'react'
import { useDispatch } from 'react-redux'
import { updateTodo, deleteTodo } from '../features/todos/todosSlice'


export default function TodoItem({ todo }){
const dispatch = useDispatch()


const toggle = () => {
dispatch(updateTodo({ id: todo.id, payload: { ...todo, completed: !todo.completed } }))
}


const remove = () => dispatch(deleteTodo(todo.id))


return (
<div className={`todo-item ${todo.completed ? 'done' : ''}`}>
<label>
<input type="checkbox" checked={todo.completed} onChange={toggle} />
<span className="todo-title">{todo.title}</span>
</label>
<div className="todo-actions">
<button onClick={remove} className="delete">x</button>
</div>
</div>
)
}